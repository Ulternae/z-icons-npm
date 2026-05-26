import React from 'react';

export interface LanArrowsUpDownLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsUpDownLeftRight: React.FC<LanArrowsUpDownLeftRightProps>;
export default LanArrowsUpDownLeftRight;
