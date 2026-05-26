import React from 'react';

export interface LanPalletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPallet: React.FC<LanPalletProps>;
export default LanPallet;
