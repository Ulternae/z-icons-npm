import React from 'react';

export interface LanCircleUserCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUserCircleCheck: React.FC<LanCircleUserCircleCheckProps>;
export default LanCircleUserCircleCheck;
