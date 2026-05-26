import React from 'react';

export interface LanMoneyBillsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBills: React.FC<LanMoneyBillsProps>;
export default LanMoneyBills;
