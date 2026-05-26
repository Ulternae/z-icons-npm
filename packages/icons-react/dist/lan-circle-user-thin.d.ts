import React from 'react';

export interface LanCircleUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUserThin: React.FC<LanCircleUserThinProps>;
export default LanCircleUserThin;
