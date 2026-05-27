import React from 'react';

export interface NeoMoneyBillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMoneyBill: React.FC<NeoMoneyBillProps>;
export default NeoMoneyBill;
