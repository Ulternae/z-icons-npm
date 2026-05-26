import React from 'react';

export interface LanPalletBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPalletBoxThin: React.FC<LanPalletBoxThinProps>;
export default LanPalletBoxThin;
