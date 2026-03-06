import type { FormatDiagnosticsHost, Program, Diagnostic } from 'typescript';

import { sys, formatDiagnostics, getPreEmitDiagnostics } from 'typescript';

import { errorLog } from '../logger.ts';

const formatDiagnosticsHost: FormatDiagnosticsHost = {
  getCanonicalFileName: (fileName: string) => sys.useCaseSensitiveFileNames ?
    fileName :
    fileName.toLowerCase(),
  getCurrentDirectory: () => sys.getCurrentDirectory(),
  getNewLine: () => sys.newLine
};

export const checkDiagnosticsErrors = (diagnostics: readonly Diagnostic[], failMessage: string): void => {
  if (diagnostics.length === 0) return;

  errorLog(formatDiagnostics(diagnostics, formatDiagnosticsHost).trim());
  throw new Error(failMessage);
}

export const checkProgramDiagnosticsErrors = (program: Program): void => {
  if (!program.getCompilerOptions().declaration) {
    throw new Error('Something went wrong - the program doesn\'t have declaration option enabled');
  }

  checkDiagnosticsErrors(getPreEmitDiagnostics(program), 'Compiled with errors');
}
