import React from 'react';

export interface LanWalletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalletThin: React.FC<LanWalletThinProps>;
export default LanWalletThin;
