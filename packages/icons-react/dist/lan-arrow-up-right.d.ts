import React from 'react';

export interface LanArrowUpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowUpRight: React.FC<LanArrowUpRightProps>;
export default LanArrowUpRight;
