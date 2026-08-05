import React from 'react';

export interface LanPiggyBankThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiggyBankThin(props: LanPiggyBankThinProps): React.ReactElement;
export default LanPiggyBankThin;
