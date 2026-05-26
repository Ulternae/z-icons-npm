import React from 'react';

export interface LanPaletteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaletteRegular: React.FC<LanPaletteRegularProps>;
export default LanPaletteRegular;
