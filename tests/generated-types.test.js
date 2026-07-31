import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';
import {
  createZIconRuntimeTypes,
  createZIconTypes,
} from '../scripts/build/build-react-package.js';

function getSyntaxErrors(source) {
  const sourceFile = ts.createSourceFile(
    'generated-types.d.ts',
    source,
    ts.ScriptTarget.ES2020,
    true,
    ts.ScriptKind.TS
  );

  return sourceFile.parseDiagnostics.filter(
    (diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error
  );
}

function getSemanticErrors(source) {
  const directory = fs.mkdtempSync(path.join(process.cwd(), '.tmp-output-writer-types-'));
  const fileName = path.join(directory, 'generated-types.ts');

  try {
    fs.writeFileSync(fileName, source);
    const program = ts.createProgram([fileName], {
      esModuleInterop: true,
      jsx: ts.JsxEmit.React,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      noEmit: true,
      skipLibCheck: false,
      strict: true,
      target: ts.ScriptTarget.ES2020,
    });

    return ts.getPreEmitDiagnostics(program).filter(
      (diagnostic) => !diagnostic.file || path.resolve(diagnostic.file.fileName) === path.resolve(fileName)
    );
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
}

describe('generated React types', () => {
  it('emits syntactically valid registry-correlated createZIcon types', () => {
    const source = createZIconRuntimeTypes();

    expect(getSyntaxErrors(source)).toEqual([]);
    expect(getSemanticErrors(source)).toEqual([]);
    expect(source).toContain('RegistryIconName<TRegistry, TPack, TVariant>');
    expect(source).toContain('variant: TVariant');
  }, 15000);

  it('emits syntactically valid deprecated ZIcon discriminated types', () => {
    const source = createZIconTypes({
      mina: {
        light: [{ name: 'check' }],
        solid: [{ name: 'check' }],
      },
      core: {
        regular: [{ name: 'sun' }],
      },
    });

    expect(getSyntaxErrors(source)).toEqual([]);
    expect(source).toContain("{ type: 'mina'; variant?: 'light'; name: MinaLightIconName }");
    expect(source).toContain("{ type: 'mina'; variant: 'solid'; name: MinaSolidIconName }");
    expect(source).toContain('@deprecated Prefer pack-specific wrappers');
  });
});
