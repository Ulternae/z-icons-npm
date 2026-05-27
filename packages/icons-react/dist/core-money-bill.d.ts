import React from 'react';

export interface CoreMoneyBillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoneyBill: React.FC<CoreMoneyBillProps>;
export default CoreMoneyBill;
