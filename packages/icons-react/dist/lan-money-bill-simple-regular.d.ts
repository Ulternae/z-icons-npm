import React from 'react';

export interface LanMoneyBillSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillSimpleRegular: React.FC<LanMoneyBillSimpleRegularProps>;
export default LanMoneyBillSimpleRegular;
