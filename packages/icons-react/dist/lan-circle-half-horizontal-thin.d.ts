import React from 'react';

export interface LanCircleHalfHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfHorizontalThin: React.FC<LanCircleHalfHorizontalThinProps>;
export default LanCircleHalfHorizontalThin;
