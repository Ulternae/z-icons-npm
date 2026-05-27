import React from 'react';

export interface NeoPaletteRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPaletteRegularDuo: React.FC<NeoPaletteRegularDuoProps>;
export default NeoPaletteRegularDuo;
