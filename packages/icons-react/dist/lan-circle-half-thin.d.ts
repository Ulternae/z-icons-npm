import React from 'react';

export interface LanCircleHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfThin: React.FC<LanCircleHalfThinProps>;
export default LanCircleHalfThin;
