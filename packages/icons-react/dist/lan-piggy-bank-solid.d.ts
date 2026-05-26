import React from 'react';

export interface LanPiggyBankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiggyBankSolid: React.FC<LanPiggyBankSolidProps>;
export default LanPiggyBankSolid;
