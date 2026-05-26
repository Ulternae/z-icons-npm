import React from 'react';

export interface LanPiggyBankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiggyBank: React.FC<LanPiggyBankProps>;
export default LanPiggyBank;
