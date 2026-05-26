import React from 'react';

export interface LanPiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiThin: React.FC<LanPiThinProps>;
export default LanPiThin;
