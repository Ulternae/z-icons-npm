import React from 'react';

export interface LanPalletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPalletRegular(props: LanPalletRegularProps): React.ReactElement;
export default LanPalletRegular;
