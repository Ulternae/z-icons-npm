import React from 'react';

export interface LanCircleDownRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDownRight: React.FC<LanCircleDownRightProps>;
export default LanCircleDownRight;
