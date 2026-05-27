import React from 'react';

export interface CorePaletteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePalette: React.FC<CorePaletteProps>;
export default CorePalette;
