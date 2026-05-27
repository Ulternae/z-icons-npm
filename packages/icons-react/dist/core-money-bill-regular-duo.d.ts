import React from 'react';

export interface CoreMoneyBillRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoneyBillRegularDuo: React.FC<CoreMoneyBillRegularDuoProps>;
export default CoreMoneyBillRegularDuo;
