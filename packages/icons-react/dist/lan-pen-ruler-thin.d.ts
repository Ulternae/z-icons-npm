import React from 'react';

export interface LanPenRulerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenRulerThin: React.FC<LanPenRulerThinProps>;
export default LanPenRulerThin;
