import React from 'react';

export interface LanWalletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWallet(props: LanWalletProps): React.ReactElement;
export default LanWallet;
