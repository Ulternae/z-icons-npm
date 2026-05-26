import React from 'react';

export interface LanPiggyBankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiggyBankRegular: React.FC<LanPiggyBankRegularProps>;
export default LanPiggyBankRegular;
