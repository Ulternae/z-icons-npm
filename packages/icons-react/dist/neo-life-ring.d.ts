import React from 'react';

export interface NeoLifeRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLifeRing: React.FC<NeoLifeRingProps>;
export default NeoLifeRing;
