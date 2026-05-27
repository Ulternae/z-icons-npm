import React from 'react';

export interface CoreLifeRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLifeRing: React.FC<CoreLifeRingProps>;
export default CoreLifeRing;
