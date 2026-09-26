import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import * as React from 'react';
import { renderSvg } from '@zcorvus/icons';
import check from '@zcorvus/icons/data/mina/mina-check';
import checkSolid from '@zcorvus/icons/data/mina/mina-check-solid';
import { MinaCheck, MinaCheckSolid } from '@zcorvus/icons-react/mina';
import { createZIcon } from '@zcorvus/icons-react';

describe('v3 public API', () => {
  it('renders matching stroke and fill from framework-neutral and React paths', () => {
    const neutral = renderSvg(check, { size: 20, ariaLabel: 'Ready' });
    const react = renderToStaticMarkup(React.createElement(MinaCheck, { size: 20, 'aria-label': 'Ready' }));
    expect(neutral).toContain('stroke="currentColor"');
    expect(react).toContain('stroke="currentColor"');
    expect(neutral).toContain('width="20"');
    expect(react).toContain('width="20"');
    expect(neutral).toContain('aria-label="Ready"');
    expect(react).toContain('aria-label="Ready"');
    expect(renderSvg(checkSolid)).toContain('fill="currentColor"');
    expect(renderToStaticMarkup(React.createElement(MinaCheckSolid))).toContain('fill="currentColor"');
  });

  it('uses explicit subsets for dynamic React selection', () => {
    const Icon = createZIcon({ mina: { light: { check: MinaCheck }, solid: { check: MinaCheckSolid } } });
    expect(Icon.has('mina', 'check')).toBe(true);
    expect(Icon.has('mina', 'other')).toBe(false);
    expect(Icon.has('mina', 'toString')).toBe(false);
    expect(renderToStaticMarkup(React.createElement(Icon, { pack: 'mina', name: 'check' }))).toContain('<path');
    expect(renderToStaticMarkup(React.createElement(Icon, { pack: 'mina', variant: 'solid', name: 'check' }))).toContain('fill="currentColor"');
    expect(renderToStaticMarkup(React.createElement(Icon, { pack: 'mina', name: 'other' }))).toBe('');
  });

  it('escapes user-supplied attributes in server-rendered SVG', () => {
    const html = renderSvg(check, { ariaLabel: 'a"<b', id: 'x&y' });
    expect(html).toContain('aria-label="a&quot;&lt;b"');
    expect(html).toContain('id="x&amp;y"');
    expect(html).toContain('role="img"');
    expect(renderSvg(check)).toContain('aria-hidden="true"');
    expect(renderSvg(check, { 'aria-label': 'Ready' })).toContain('role="img"');
  });

  it('loads a pack map only through its explicit entry', async () => {
    const { default: bru } = await import('@zcorvus/icons-react/packs-data/bru');
    expect(bru['accessible-icon']).toBeDefined();
    const { default: raw } = await import('@zcorvus/icons/packs-data/bru');
    expect(raw['accessible-icon'].name).toBe('accessible-icon');
  }, 30000);

  it('allows the Web entry to be called during server rendering', async () => {
    const { defineZIcon } = await import('@zcorvus/icons/web');
    expect(() => defineZIcon({ mina: { light: { check } } })).not.toThrow();
  });

  it('registers and updates an explicit Web Component subset', async () => {
    const previousWindow = globalThis.window;
    const previousElement = globalThis.HTMLElement;
    const definitions = new Map();
    globalThis.window = { customElements: { get: (name) => definitions.get(name), define: (name, ctor) => definitions.set(name, ctor) } };
    globalThis.HTMLElement = class {
      attributes = new Map([['pack', 'mina'], ['name', 'check']]);
      isConnected = true;
      innerHTML = '';
      getAttribute(name) { return this.attributes.get(name) ?? null; }
    };
    try {
      const { defineZIcon } = await import('@zcorvus/icons/web');
      defineZIcon({ mina: { light: { check } } });
      const element = new (definitions.get('z-icon'))();
      element.connectedCallback();
      expect(element.innerHTML).toContain('<path');
      element.attributes.set('size', '32');
      element.attributeChangedCallback();
      expect(element.innerHTML).toContain('width="32"');
      element.attributes.set('name', 'unknown');
      element.attributeChangedCallback();
      expect(element.innerHTML).toBe('');
      element.attributes.set('name', 'toString');
      element.attributeChangedCallback();
      expect(element.innerHTML).toBe('');
    } finally {
      globalThis.window = previousWindow;
      globalThis.HTMLElement = previousElement;
    }
  });
});
