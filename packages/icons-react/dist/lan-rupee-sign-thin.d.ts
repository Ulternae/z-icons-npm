import React from 'react';

export interface LanRupeeSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRupeeSignThin: React.FC<LanRupeeSignThinProps>;
export default LanRupeeSignThin;
