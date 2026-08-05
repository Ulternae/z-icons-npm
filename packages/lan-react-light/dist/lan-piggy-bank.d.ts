import React from 'react';

export interface LanPiggyBankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiggyBank(props: LanPiggyBankProps): React.ReactElement;
export default LanPiggyBank;
