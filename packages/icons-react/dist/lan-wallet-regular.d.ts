import React from 'react';

export interface LanWalletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalletRegular: React.FC<LanWalletRegularProps>;
export default LanWalletRegular;
