import React from 'react';

export interface LanWalletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWallet: React.FC<LanWalletProps>;
export default LanWallet;
