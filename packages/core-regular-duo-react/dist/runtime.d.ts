import React from 'react';

export interface CoreIconProps<TName extends string> extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  name: TName;
  size?: string | number;
}

export interface ZCoreSpriteProps extends Omit<React.SVGProps<SVGSVGElement>, 'children' | 'dangerouslySetInnerHTML'> {}

export declare function getSpriteSymbolId(name: string, variant: string, defaultVariant?: string): string;
export declare function injectZCoreSprite(spriteId: string, sprite: string): Element | undefined;
export declare function scheduleZCoreSprite(spriteId: string, sprite: string): void;
export declare function createSpriteComponent(spriteId: string, sprite: string): React.FC<ZCoreSpriteProps>;

export declare function createCoreIcon<TName extends string>(
  options: {
    variant: string;
    defaultVariant?: string;
    spriteId: string;
    sprite: string;
    viewBoxes: Record<TName, string>;
  }
): React.FC<CoreIconProps<TName>>;
