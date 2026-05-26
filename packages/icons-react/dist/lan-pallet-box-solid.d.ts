import React from 'react';

export interface LanPalletBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPalletBoxSolid: React.FC<LanPalletBoxSolidProps>;
export default LanPalletBoxSolid;
