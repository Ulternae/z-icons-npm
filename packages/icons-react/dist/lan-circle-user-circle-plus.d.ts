import React from 'react';

export interface LanCircleUserCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUserCirclePlus: React.FC<LanCircleUserCirclePlusProps>;
export default LanCircleUserCirclePlus;
