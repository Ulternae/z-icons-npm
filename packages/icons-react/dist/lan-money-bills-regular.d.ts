import React from 'react';

export interface LanMoneyBillsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillsRegular: React.FC<LanMoneyBillsRegularProps>;
export default LanMoneyBillsRegular;
