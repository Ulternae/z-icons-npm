import React from 'react';

export interface LanRupeeSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRupeeSign: React.FC<LanRupeeSignProps>;
export default LanRupeeSign;
