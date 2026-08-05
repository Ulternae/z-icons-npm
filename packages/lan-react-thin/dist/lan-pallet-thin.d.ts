import React from 'react';

export interface LanPalletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPalletThin(props: LanPalletThinProps): React.ReactElement;
export default LanPalletThin;
