import React from 'react';

export interface LanCircleNotchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNotchThin: React.FC<LanCircleNotchThinProps>;
export default LanCircleNotchThin;
