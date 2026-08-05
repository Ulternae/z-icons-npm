import React from 'react';

export interface NeoMoneyBillRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMoneyBillRegularDuo(props: NeoMoneyBillRegularDuoProps): React.ReactElement;
export default NeoMoneyBillRegularDuo;
