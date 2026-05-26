import React from 'react';

export interface LanPalletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPalletRegular: React.FC<LanPalletRegularProps>;
export default LanPalletRegular;
