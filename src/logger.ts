const enum LogLevel {
  Verbose,
  Normal,
  Warning,
  Error
}

function logMessage(message: string, level: LogLevel = LogLevel.Verbose): void {
  if (level < currentLogLevel) return;
  if (level === LogLevel.Error) return console.error(`\x1b[0;31m${message}\x1b[0m`);
  if (level === LogLevel.Warning) return console.warn(`\x1b[1;33m${message}\x1b[0m`);
  return console.log(message);
}

export function verboseLog(message: string): void {
  logMessage(message, LogLevel.Verbose);
}

export function normalLog(message: string): void {
  logMessage(message, LogLevel.Normal);
}

export function warnLog(message: string): void {
  logMessage(message, LogLevel.Warning);
}

export function errorLog(message: string): void {
  logMessage(message, LogLevel.Error);
}

let currentLogLevel = LogLevel.Error;

export function enableVerbose(): void {
  currentLogLevel = LogLevel.Verbose;
  normalLog('Verbose log enabled');
}

export function enableNormalLog(): void {
  currentLogLevel = LogLevel.Normal;
}
