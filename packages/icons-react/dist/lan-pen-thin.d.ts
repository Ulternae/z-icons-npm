import React from 'react';

export interface LanPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenThin: React.FC<LanPenThinProps>;
export default LanPenThin;
