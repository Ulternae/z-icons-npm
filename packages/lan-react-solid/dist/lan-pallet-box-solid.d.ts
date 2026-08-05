import React from 'react';

export interface LanPalletBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPalletBoxSolid(props: LanPalletBoxSolidProps): React.ReactElement;
export default LanPalletBoxSolid;
