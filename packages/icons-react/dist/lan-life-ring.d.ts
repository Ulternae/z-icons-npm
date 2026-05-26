import React from 'react';

export interface LanLifeRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLifeRing: React.FC<LanLifeRingProps>;
export default LanLifeRing;
