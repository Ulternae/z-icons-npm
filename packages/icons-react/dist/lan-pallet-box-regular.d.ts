import React from 'react';

export interface LanPalletBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPalletBoxRegular: React.FC<LanPalletBoxRegularProps>;
export default LanPalletBoxRegular;
