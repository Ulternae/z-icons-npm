import React from 'react';

export interface CorePaletteRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CorePaletteRegularDuo: React.FC<CorePaletteRegularDuoProps>;
export default CorePaletteRegularDuo;
