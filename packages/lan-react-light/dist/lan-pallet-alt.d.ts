import React from 'react';

export interface LanPalletAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPalletAlt(props: LanPalletAltProps): React.ReactElement;
export default LanPalletAlt;
