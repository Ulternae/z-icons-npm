import fs from 'node:fs';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { createOutputWriter } from '../scripts/build/fs-utils.js';

const createdDirectories = [];

function createTestDirectory() {
  const directory = fs.mkdtempSync(path.join(process.cwd(), '.tmp-output-writer-'));
  createdDirectories.push(directory);
  return directory;
}

afterEach(() => {
  for (const directory of createdDirectories.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe('createOutputWriter', () => {
  it('does not rewrite files that differ only by line endings', () => {
    const root = createTestDirectory();
    const target = path.join(root, 'nested', 'file.js');
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, 'first\r\nsecond\r\n');

    const writer = createOutputWriter(root);
    expect(writer.writeFile(target, 'first\nsecond\n')).toBe(false);
    expect(writer.finish()).toEqual({ written: 0, unchanged: 1, removed: 0 });
    expect(fs.readFileSync(target, 'utf8')).toBe('first\r\nsecond\r\n');
  });

  it('writes changed files and removes stale output', () => {
    const root = createTestDirectory();
    const stale = path.join(root, 'stale.js');
    fs.writeFileSync(stale, 'stale');

    const writer = createOutputWriter(root);
    const current = path.join(root, 'current.js');
    expect(writer.writeFile(current, 'current\n')).toBe(true);
    expect(writer.finish()).toEqual({ written: 1, unchanged: 0, removed: 1 });
    expect(fs.existsSync(current)).toBe(true);
    expect(fs.existsSync(stale)).toBe(false);
  });

  it('refuses writes outside its output root', () => {
    const root = createTestDirectory();
    const writer = createOutputWriter(root);

    expect(() => writer.writeFile(path.join(root, '..', 'outside.js'), 'unsafe')).toThrow(
      'outside output root'
    );
  });
});
