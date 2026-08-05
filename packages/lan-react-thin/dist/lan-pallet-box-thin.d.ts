import React from 'react';

export interface LanPalletBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPalletBoxThin(props: LanPalletBoxThinProps): React.ReactElement;
export default LanPalletBoxThin;
