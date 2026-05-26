import React from 'react';

export interface LanPearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPearThin: React.FC<LanPearThinProps>;
export default LanPearThin;
