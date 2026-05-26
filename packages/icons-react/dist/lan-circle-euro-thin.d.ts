import React from 'react';

export interface LanCircleEuroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEuroThin: React.FC<LanCircleEuroThinProps>;
export default LanCircleEuroThin;
