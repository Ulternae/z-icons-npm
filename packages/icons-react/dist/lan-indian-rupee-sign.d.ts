import React from 'react';

export interface LanIndianRupeeSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIndianRupeeSign: React.FC<LanIndianRupeeSignProps>;
export default LanIndianRupeeSign;
