import React from 'react';

export interface BruGoogleWalletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGoogleWallet(props: BruGoogleWalletProps): React.ReactElement;
export default BruGoogleWallet;
