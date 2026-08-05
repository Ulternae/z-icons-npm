import React from 'react';

export interface LanPalletBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPalletBox(props: LanPalletBoxProps): React.ReactElement;
export default LanPalletBox;
