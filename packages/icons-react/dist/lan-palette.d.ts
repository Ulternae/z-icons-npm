import React from 'react';

export interface LanPaletteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPalette: React.FC<LanPaletteProps>;
export default LanPalette;
