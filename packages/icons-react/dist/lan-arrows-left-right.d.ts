import React from 'react';

export interface LanArrowsLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsLeftRight: React.FC<LanArrowsLeftRightProps>;
export default LanArrowsLeftRight;
