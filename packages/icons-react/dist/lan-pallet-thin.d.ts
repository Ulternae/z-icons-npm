import React from 'react';

export interface LanPalletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPalletThin: React.FC<LanPalletThinProps>;
export default LanPalletThin;
