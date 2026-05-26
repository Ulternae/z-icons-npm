import React from 'react';

export interface LanUpRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpRight: React.FC<LanUpRightProps>;
export default LanUpRight;
