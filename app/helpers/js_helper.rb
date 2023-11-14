require 'open3'

# require 'execjs'
# require 'open-uri'

# irb(main):043> appp = ExecJS.compile("function finalee() { return  1 + 1 }")
# =>
# #<ExecJS::ExternalRuntime::Context:0x000000010a6f3960
# irb(main):045> appp.eval("finalee()")
# => 2
# irb(main):047> appp.exec("finalee()")
# => nil
module JsHelper
  def compress_html(&block)
    content = capture(&block)
    # content.gsub(/\s+/, ' ').strip.html_safe + "\n"
    "#{content.gsub(/>\s+</, '><').strip.html_safe}\n".html_safe
  end

  def ssr_render(file_path, &block)
    # source = File.read(File.expand_path(file_path, __FILE__))

    # source = File.read(File.expand_path(file_path, Rails.root))
    file_path_expanded = File.expand_path(file_path, Rails.root)
    # result = system("bun run #{file_path_expanded}")

    block_content = capture(&block) || ""
    command = "echo \"#{block_content}\" | bun run #{file_path_expanded}"
    # command = 'ls'  # Replace 'ls' with your command
    stdout, stderr, status = Open3.capture3(command)

    if status.success?
      puts "Output:\n#{stdout}"
    else
      throw "Error:\n#{stderr}"
    end

    result = extract_content(stdout)
    # ctx = ExecJS.compile(source)
    # source = open(file_path).read

    # context = ExecJS.compile(source)
    # debug
    # context.eval("render()")
    # system(`bun run ${file_path}`)
    result.html_safe
  end

  private

  def extract_content(input_string)
    match = input_string.match(%r{//---S//(.+?)//---E//}m)
    match ? match[1] : nil
  end
end
