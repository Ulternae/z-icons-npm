import React from 'react';

export interface LanCircleRupeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRupee: React.FC<LanCircleRupeeProps>;
export default LanCircleRupee;
