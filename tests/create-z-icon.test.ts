import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { createZIcon } from '@zcorvus/icons-react/create';
import {
  BruGithub,
  CoreAnchor,
  CoreSun,
  MinaAnchor,
  MinaAnchorSolid,
  MinaCheck,
  MinaCheckSolid,
  MinaX,
} from '@zcorvus/icons-react';
import {
  bruIcons,
  coreIcons,
  minaIcons,
  minaIconsSolid,
} from '@zcorvus/icons-react/packs-data';

function expectElement(value: React.ReactNode) {
  expect(React.isValidElement(value)).toBe(true);

  return value as React.ReactElement;
}

describe('createZIcon', () => {
  it('renders an icon from a manual nested registry', () => {
    const AppIcon = createZIcon({
      mina: {
        light: {
          check: MinaCheck,
        },
      },
    });

    const element = AppIcon({ type: 'mina', name: 'check' });

    const icon = expectElement(element);

    expect(icon.type).toBe(MinaCheck);
    expect(icon.props.size).toBe(24);
  });

  it('uses the requested variant when available', () => {
    const AppIcon = createZIcon({
      mina: {
        light: {
          check: MinaCheck,
        },
        solid: {
          check: MinaCheckSolid,
        },
      },
    });

    const element = AppIcon({ type: 'mina', name: 'check', variant: 'solid' });

    expect(expectElement(element).type).toBe(MinaCheckSolid);
  });

  it('uses defaultVariant when variant is omitted', () => {
    const AppIcon = createZIcon(
      {
        mina: {
          light: {
            check: MinaCheck,
          },
          solid: {
            check: MinaCheckSolid,
          },
        },
      },
      {
        defaultVariant: 'solid',
      }
    );

    const element = AppIcon({ type: 'mina', name: 'check' });

    expect(expectElement(element).type).toBe(MinaCheckSolid);
  });

  it('falls back to fallbackVariant inside the same pack', () => {
    const AppIcon = createZIcon(
      {
        mina: {
          light: {
            anchor: MinaAnchor,
          },
          solid: {
            check: MinaCheckSolid,
          },
        },
      },
      {
        fallbackVariant: 'light',
      }
    );

    const element = AppIcon({ type: 'mina', name: 'anchor', variant: 'solid' } as never);

    expect(expectElement(element).type).toBe(MinaAnchor);
  });

  it('falls back to fallbackPack only when configured', () => {
    const AppIcon = createZIcon(
      {
        mina: {
          light: {
            check: MinaCheck,
          },
        },
        core: {
          light: {
            sun: CoreSun,
          },
        },
      },
      {
        fallbackPack: 'core',
      }
    );

    const element = AppIcon({ type: 'mina', name: 'sun' } as never);

    expect(expectElement(element).type).toBe(CoreSun);
  });

  it('renders fallbackIcon when no registry match exists', () => {
    const AppIcon = createZIcon(
      {
        mina: {
          light: {
            check: MinaCheck,
          },
        },
      },
      {
        fallbackIcon: MinaX,
      }
    );

    const element = AppIcon({ type: 'mina', name: 'missing' } as never);

    expect(expectElement(element).type).toBe(MinaX);
  });

  it('returns null for missing icons by default', () => {
    const AppIcon = createZIcon({
      mina: {
        light: {
          check: MinaCheck,
        },
      },
    });

    expect(AppIcon({ type: 'mina', name: 'missing' } as never)).toBeNull();
  });

  it('warns for missing icons when configured', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const AppIcon = createZIcon(
      {
        mina: {
          light: {
            check: MinaCheck,
          },
        },
      },
      {
        missing: 'warn',
      }
    );

    expect(AppIcon({ type: 'mina', name: 'missing' } as never)).toBeNull();
    expect(warn).toHaveBeenCalledWith('[z-icons] Missing icon: type="mina", name="missing", variant="light".');

    warn.mockRestore();
  });

  it('throws for missing icons when configured', () => {
    const AppIcon = createZIcon(
      {
        mina: {
          light: {
            check: MinaCheck,
          },
        },
      },
      {
        missing: 'error',
      }
    );

    expect(() => AppIcon({ type: 'mina', name: 'missing' } as never)).toThrow(
      '[z-icons] Missing icon: type="mina", name="missing", variant="light".'
    );
  });

  it('normalizes flat registries with inputVariant', () => {
    const AppIcon = createZIcon(
      {
        mina: minaIconsSolid,
      },
      {
        inputVariant: 'solid',
        defaultVariant: 'solid',
      }
    );

    const element = AppIcon({ type: 'mina', name: 'check' });

    expect(expectElement(element).type).toBe(MinaCheckSolid);
  });

  it('accepts generated packs-data maps', () => {
    const AppIcon = createZIcon({
      core: {
        light: coreIcons,
      },
      mina: {
        light: minaIcons,
        solid: minaIconsSolid,
      },
      bru: {
        light: bruIcons,
      },
    });

    expect(expectElement(AppIcon({ type: 'core', name: 'anchor' })).type).toBe(CoreAnchor);
    expect(expectElement(AppIcon({ type: 'mina', name: 'anchor' })).type).toBe(MinaAnchor);
    expect(expectElement(AppIcon({ type: 'mina', name: 'anchor', variant: 'solid' })).type).toBe(MinaAnchorSolid);
    expect(expectElement(AppIcon({ type: 'bru', name: 'github' })).type).toBe(BruGithub);
  });
});
