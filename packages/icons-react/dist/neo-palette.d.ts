import React from 'react';

export interface NeoPaletteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPalette: React.FC<NeoPaletteProps>;
export default NeoPalette;
