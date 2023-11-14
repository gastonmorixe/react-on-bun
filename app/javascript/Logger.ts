/*
 * Logger class with 4 methods: debug, info, warn, error
 */
export class Logger {
  static async debug(message: string, ...args: any[]) {
    if (
      typeof process === "undefined"
        ? true
        : process.env.LOGGER_LEVEL === "debug"
    ) {
      console.log(`[debug]  ${new Date().toISOString()} - ${message}`, ...args)
    }
  }
  static info(message: string, ...args: any[]) {
    if (
      typeof process === "undefined"
        ? true
        : process.env.LOGGER_LEVEL === "debug" ||
          process.env.LOGGER_LEVEL === "info"
    ) {
      // await Bun.write(Bun.stdout, message)
      console.log(`[info] ${new Date().toISOString()} - ${message}`, ...args)
    }
  }

  static warn(message: string, ...args: any[]) {
    if (
      typeof process === "undefined"
        ? true
        : process.env.LOGGER_LEVEL === "debug" ||
          process.env.LOGGER_LEVEL === "info" ||
          process.env.LOGGER_LEVEL === "warn"
    ) {
      console.log(`[warn] ${new Date().toISOString()} - ${message}`, ...args)
    }
  }

  static error(message: string, ...args: any[]) {
    if (
      typeof process === "undefined"
        ? true
        : process.env.LOGGER_LEVEL === "debug" ||
          process.env.LOGGER_LEVEL === "info" ||
          process.env.LOGGER_LEVEL === "warn" ||
          process.env.LOGGER_LEVEL === "error"
    ) {
      console.log(`[error] ${new Date().toISOString()} - ${message}`, ...args)
    }
  }
}
