import React from 'react';

export interface LanPalletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPallet(props: LanPalletProps): React.ReactElement;
export default LanPallet;
