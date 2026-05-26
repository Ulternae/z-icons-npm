import React from 'react';

export interface LanSquareRingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRingThin: React.FC<LanSquareRingThinProps>;
export default LanSquareRingThin;
