import React from 'react';

export interface LanCircleRThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRThin: React.FC<LanCircleRThinProps>;
export default LanCircleRThin;
