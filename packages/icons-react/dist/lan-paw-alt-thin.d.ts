import React from 'react';

export interface LanPawAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPawAltThin: React.FC<LanPawAltThinProps>;
export default LanPawAltThin;
