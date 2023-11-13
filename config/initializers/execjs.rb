# require 'execjs'
# require "execjs/external_runtime"

# BUN2 = ExecJS::ExternalRuntime.new(
#           name:        "Bun2",
#           command:     ["bun run"],
#           #runner_path: ExecJS.root + "/support/node_runner.js",
#           encoding:    'UTF-8'
#     )

# ExecJS.runtime = BUN2

ExecJS.runtime = ExecJS::Runtimes::Bun
