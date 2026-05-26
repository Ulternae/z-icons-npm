import React from 'react';

export interface LanPiggyBankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiggyBankThin: React.FC<LanPiggyBankThinProps>;
export default LanPiggyBankThin;
