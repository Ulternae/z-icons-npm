import React from 'react';
import type { IconVariant } from '@zcorvus/icons/types';

export interface PackIconProps<TName extends string> extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  name: TName;
  variant?: IconVariant;
  size?: string | number;
}

export interface ZIconSpriteProps extends Omit<React.SVGProps<SVGSVGElement>, 'children' | 'dangerouslySetInnerHTML'> {}

export declare function getSpriteSymbolId(
  type: string,
  name: string,
  variant: string,
  defaultVariant?: string
): string;

export declare function injectZIconSprite(spriteId: string, sprite: string): Element | undefined;
export declare function scheduleZIconSprite(spriteId: string, sprite: string): void;
export declare function scheduleZIconSpriteLoad(
  loadId: string,
  loadSprite: () => Promise<{ spriteId: string; sprite: string }>
): void;
export declare function ZIconSprite(props: ZIconSpriteProps & { spriteId: string; sprite: string }): React.ReactElement;
export declare function createSpriteComponent(spriteId: string, sprite: string): React.FC<ZIconSpriteProps>;

export declare function createPackIcon<TName extends string>(
  options: {
    pack: string;
    variant: IconVariant | string;
    defaultVariant?: IconVariant | string;
    spriteId: string;
    sprite: string;
    viewBoxes: Record<TName, string>;
  }
): React.FC<PackIconProps<TName>>;
