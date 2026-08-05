import React from 'react';

export interface LanPalletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPalletSolid(props: LanPalletSolidProps): React.ReactElement;
export default LanPalletSolid;
