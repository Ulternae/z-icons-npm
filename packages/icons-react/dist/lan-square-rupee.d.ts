import React from 'react';

export interface LanSquareRupeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRupee: React.FC<LanSquareRupeeProps>;
export default LanSquareRupee;
