import React from 'react';

export interface PackIconProps<TName extends string> extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  name: TName;
  size?: string | number;
}

export interface ZIconSpriteProps extends Omit<React.SVGProps<SVGSVGElement>, 'children' | 'dangerouslySetInnerHTML'> {}

export declare function getSpriteSymbolId(pack: string, name: string, variant: string, defaultVariant: string): string;
export declare function injectZSprite(spriteId: string, sprite: string): Element | undefined;
export declare function scheduleZSprite(spriteId: string, sprite: string): void;
export declare function createSpriteComponent(spriteId: string, sprite: string): React.FC<ZIconSpriteProps>;

export declare function createPackIcon<TName extends string>(
  options: {
    pack: string;
    variant: string;
    defaultVariant: string;
    spriteId: string;
    sprite: string;
    viewBoxes: Record<TName, string>;
  }
): React.FC<PackIconProps<TName>>;
