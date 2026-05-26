import React from 'react';

export interface LanMoneyBillsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillsThin: React.FC<LanMoneyBillsThinProps>;
export default LanMoneyBillsThin;
