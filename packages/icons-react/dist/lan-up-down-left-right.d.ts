import React from 'react';

export interface LanUpDownLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpDownLeftRight: React.FC<LanUpDownLeftRightProps>;
export default LanUpDownLeftRight;
