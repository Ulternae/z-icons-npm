import React from 'react';

export interface LanPenAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenAltThin: React.FC<LanPenAltThinProps>;
export default LanPenAltThin;
