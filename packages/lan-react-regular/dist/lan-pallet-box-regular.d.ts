import React from 'react';

export interface LanPalletBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPalletBoxRegular(props: LanPalletBoxRegularProps): React.ReactElement;
export default LanPalletBoxRegular;
