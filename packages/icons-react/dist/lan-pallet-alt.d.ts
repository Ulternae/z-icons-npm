import React from 'react';

export interface LanPalletAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPalletAlt: React.FC<LanPalletAltProps>;
export default LanPalletAlt;
