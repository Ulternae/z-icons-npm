import React from 'react';

export interface LanPalletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPalletSolid: React.FC<LanPalletSolidProps>;
export default LanPalletSolid;
