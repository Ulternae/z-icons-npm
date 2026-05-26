import React from 'react';

export interface LanPalletBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPalletBox: React.FC<LanPalletBoxProps>;
export default LanPalletBox;
