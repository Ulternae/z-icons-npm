import React from 'react';

export interface LanSquareRingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRing: React.FC<LanSquareRingProps>;
export default LanSquareRing;
