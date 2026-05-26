import React from 'react';

export interface LanMoneyBillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBill: React.FC<LanMoneyBillProps>;
export default LanMoneyBill;
