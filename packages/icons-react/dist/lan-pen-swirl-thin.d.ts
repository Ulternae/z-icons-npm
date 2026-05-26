import React from 'react';

export interface LanPenSwirlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSwirlThin: React.FC<LanPenSwirlThinProps>;
export default LanPenSwirlThin;
