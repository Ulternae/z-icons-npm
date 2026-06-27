import React from 'react';

const SPRITE_ATTR = 'data-zcorvus-react-sprite';
const HIDDEN_SPRITE_STYLE = {
  position: 'absolute',
  width: 0,
  height: 0,
  overflow: 'hidden',
};
const scheduledSpriteIds = new Set();
const scheduledSpriteLoadIds = new Set();

function getSpriteBody(sprite) {
  const match = sprite.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);

  return match ? match[1].trim() : sprite;
}

export function getSpriteSymbolId(type, name, variant, defaultVariant = 'light') {
  return `${type}-${variant === defaultVariant ? name : `${name}-${variant}`}`;
}

export function injectZIconSprite(spriteId, sprite) {
  if (typeof document === 'undefined') {
    return undefined;
  }

  const existing = document.querySelector(`[${SPRITE_ATTR}="${spriteId}"]`);

  if (existing) {
    return existing;
  }

  const template = document.createElement('template');
  template.innerHTML = sprite.trim();
  const element = template.content.firstElementChild;

  if (!element) {
    return undefined;
  }

  element.setAttribute('aria-hidden', 'true');
  element.setAttribute(SPRITE_ATTR, spriteId);
  element.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
  document.body.prepend(element);

  return element;
}

function scheduleClientTask(task) {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(task);
    return;
  }

  Promise.resolve().then(task);
}

export function scheduleZIconSprite(spriteId, sprite) {
  if (typeof document === 'undefined' || scheduledSpriteIds.has(spriteId)) {
    return;
  }

  if (document.querySelector(`[${SPRITE_ATTR}="${spriteId}"]`)) {
    return;
  }

  scheduledSpriteIds.add(spriteId);
  scheduleClientTask(() => {
    injectZIconSprite(spriteId, sprite);
    scheduledSpriteIds.delete(spriteId);
  });
}

export function scheduleZIconSpriteLoad(loadId, loadSprite) {
  if (typeof document === 'undefined' || scheduledSpriteLoadIds.has(loadId)) {
    return;
  }

  scheduledSpriteLoadIds.add(loadId);
  scheduleClientTask(() => {
    loadSprite()
      .then(({ spriteId, sprite }) => {
        injectZIconSprite(spriteId, sprite);
      })
      .finally(() => {
        scheduledSpriteLoadIds.delete(loadId);
      });
  });
}

export function ZIconSprite({ spriteId, sprite, ...props }) {
  return React.createElement('svg', {
    ...props,
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': props['aria-hidden'] ?? true,
    [SPRITE_ATTR]: spriteId,
    style: { ...HIDDEN_SPRITE_STYLE, ...props.style },
    dangerouslySetInnerHTML: { __html: getSpriteBody(sprite) },
  });
}

export function createSpriteComponent(spriteId, sprite) {
  return function ZPackSprite(props) {
    return React.createElement(ZIconSprite, { spriteId, sprite, ...props });
  };
}

export function createPackIcon({ pack, variant, defaultVariant = 'light', spriteId, sprite, viewBoxes }) {
  return function ZPackIcon({ name, variant: _variant, size = 24, color, style, ...props }) {
    const viewBox = viewBoxes[name];

    if (!viewBox) {
      return null;
    }

    scheduleZIconSprite(spriteId, sprite);

    return React.createElement(
      'svg',
      {
        viewBox,
        width: size,
        height: size,
        ...props,
        style: { ...(color ? { color } : {}), ...style },
      },
      React.createElement('use', { href: `#${getSpriteSymbolId(pack, name, variant, defaultVariant)}` })
    );
  };
}
