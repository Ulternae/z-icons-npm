import React from 'react';

export interface NeoLifeRingRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLifeRingRegularDuo: React.FC<NeoLifeRingRegularDuoProps>;
export default NeoLifeRingRegularDuo;
