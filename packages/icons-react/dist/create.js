import React from 'react';

const DEFAULT_OPTIONS = {
  defaultVariant: 'light',
  defaultVariants: undefined,
  fallbackVariant: undefined,
  fallbackPack: undefined,
  fallbackIcon: undefined,
  inputVariant: undefined,
  missing: 'null',
};

function isReactComponent(value) {
  return typeof value === 'function' || (typeof value === 'object' && value !== null && '$$typeof' in value);
}

function normalizeRegistry(registry, inputVariant) {
  if (!inputVariant) {
    return registry;
  }

  return Object.fromEntries(
    Object.entries(registry).map(([pack, packIcons]) => [
      pack,
      {
        [inputVariant]: packIcons,
      },
    ])
  );
}

function resolveIcon(registry, type, name, variant, fallbackVariant, fallbackPack) {
  const candidates = [
    [type, variant],
    fallbackVariant ? [type, fallbackVariant] : undefined,
    fallbackPack ? [fallbackPack, variant] : undefined,
    fallbackPack && fallbackVariant ? [fallbackPack, fallbackVariant] : undefined,
  ].filter(Boolean);

  for (const [pack, currentVariant] of candidates) {
    const Icon = registry[pack]?.[currentVariant]?.[name];

    if (isReactComponent(Icon)) {
      return Icon;
    }
  }

  return undefined;
}

function handleMissingIcon({ type, name, variant, missing }) {
  const message = `[z-icons] Missing icon: type="${type}", name="${name}", variant="${variant}".`;

  if (missing === 'error') {
    throw new Error(message);
  }

  const isProduction = typeof process !== 'undefined' && process.env?.NODE_ENV === 'production';

  if (missing === 'warn' && !isProduction) {
    console.warn(message);
  }

  return null;
}

export function createZIcon(registry, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const normalizedRegistry = normalizeRegistry(registry, config.inputVariant);

  return function CreatedZIcon({
    type,
    name,
    variant,
    size = 24,
    color,
    style,
    ...props
  }) {
    const resolvedVariant = variant ?? config.defaultVariants?.[type] ?? config.defaultVariant;
    const Icon = resolveIcon(
      normalizedRegistry,
      type,
      name,
      resolvedVariant,
      config.fallbackVariant,
      config.fallbackPack
    );

    if (Icon) {
      return React.createElement(Icon, { size, color, style, ...props });
    }

    if (config.fallbackIcon) {
      return React.createElement(config.fallbackIcon, { size, color, style, ...props });
    }

    return handleMissingIcon({ type, name, variant: resolvedVariant, missing: config.missing });
  };
}
