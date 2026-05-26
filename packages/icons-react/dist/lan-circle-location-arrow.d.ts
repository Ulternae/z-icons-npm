import React from 'react';

export interface LanCircleLocationArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLocationArrow: React.FC<LanCircleLocationArrowProps>;
export default LanCircleLocationArrow;
