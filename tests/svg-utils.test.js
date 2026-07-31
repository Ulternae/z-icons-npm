import { describe, expect, it } from 'vitest';
import { createSvgSprite, parseSvg } from '../scripts/build/svg-utils.js';

describe('SVG AST utilities', () => {
  it('preserves nested elements, text and React-compatible attributes', () => {
    const result = parseSvg(`
      <svg viewBox="0 0 32 32" stroke-width="2">
        <g class="layer" aria-label="shape">
          <path d="M0 0h10" />
          <text style="font-size:12px;fill:currentColor">Hi</text>
        </g>
      </svg>
    `);

    expect(result.viewBox).toBe('0 0 32 32');
    expect(result.presentationAttributes).toBe('stroke-width="2"');
    expect(result.children).toHaveLength(1);
    expect(result.children[0]).toContain('React.createElement("g"');
    expect(result.children[0]).toContain('"className":"layer"');
    expect(result.children[0]).toContain('React.createElement("text"');
    expect(result.children[0]).toContain('"fontSize":"12px"');
    expect(result.children[0]).toContain('"Hi"');
    expect(result.innerContent).toContain('<g class="layer" aria-label="shape">');
  });

  it('creates sprites from the parsed tree', () => {
    const sprite = createSvgSprite('mina', 'light', [
      {
        name: 'nested',
        svg: '<svg viewBox="0 0 24 24"><g><path d="M1 1h2"/></g></svg>',
      },
    ]);

    expect(sprite).toContain('<symbol id="mina-nested" viewBox="0 0 24 24">');
    expect(sprite).toContain('<g><path d="M1 1h2"/></g>');
  });

  it.each([
    '<svg><script>alert(1)</script></svg>',
    '<svg><foreignObject><div>unsafe</div></foreignObject></svg>',
    '<svg><path onload="alert(1)"/></svg>',
    '<svg><use href="https://example.com/icons.svg#x"/></svg>',
  ])('rejects active or external content', (svg) => {
    expect(() => parseSvg(svg)).toThrow(/Unsafe|External/);
  });

  it('rejects empty icons instead of generating an empty component', () => {
    expect(() => parseSvg('<svg viewBox="0 0 24 24"><defs/></svg>')).toThrow(
      'has no graphical elements'
    );
  });

  it('includes the source path in parser failures', () => {
    expect(() => parseSvg('', 'icons/mina/light/six.svg')).toThrow(
      'icons/mina/light/six.svg'
    );
  });
});
