import React from 'react';

export interface NeoMoneyBillRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMoneyBillRegularDuo: React.FC<NeoMoneyBillRegularDuoProps>;
export default NeoMoneyBillRegularDuo;
