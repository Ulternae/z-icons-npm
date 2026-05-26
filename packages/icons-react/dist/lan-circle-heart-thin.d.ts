import React from 'react';

export interface LanCircleHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHeartThin: React.FC<LanCircleHeartThinProps>;
export default LanCircleHeartThin;
