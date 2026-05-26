import React from 'react';

export interface LanPeachThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeachThin: React.FC<LanPeachThinProps>;
export default LanPeachThin;
