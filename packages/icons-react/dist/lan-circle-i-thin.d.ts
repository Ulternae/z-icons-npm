import React from 'react';

export interface LanCircleIThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleIThin: React.FC<LanCircleIThinProps>;
export default LanCircleIThin;
