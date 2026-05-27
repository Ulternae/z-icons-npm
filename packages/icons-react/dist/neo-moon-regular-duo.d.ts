import React from 'react';

export interface NeoMoonRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMoonRegularDuo: React.FC<NeoMoonRegularDuoProps>;
export default NeoMoonRegularDuo;
