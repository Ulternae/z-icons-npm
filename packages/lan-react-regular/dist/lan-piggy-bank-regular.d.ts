import React from 'react';

export interface LanPiggyBankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiggyBankRegular(props: LanPiggyBankRegularProps): React.ReactElement;
export default LanPiggyBankRegular;
