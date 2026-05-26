import React from 'react';

export interface LanCircleVideoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleVideoThin: React.FC<LanCircleVideoThinProps>;
export default LanCircleVideoThin;
