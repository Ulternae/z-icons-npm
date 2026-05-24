import React from 'react';

export interface BruGoogleWalletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGoogleWallet: React.FC<BruGoogleWalletProps>;
export default BruGoogleWallet;
