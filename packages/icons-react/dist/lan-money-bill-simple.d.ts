import React from 'react';

export interface LanMoneyBillSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillSimple: React.FC<LanMoneyBillSimpleProps>;
export default LanMoneyBillSimple;
