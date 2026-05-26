import React from 'react';

export interface LanCircleUpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUpRight: React.FC<LanCircleUpRightProps>;
export default LanCircleUpRight;
