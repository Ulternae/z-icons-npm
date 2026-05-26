import React from 'react';

export interface LanMoneyBillRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillRegular: React.FC<LanMoneyBillRegularProps>;
export default LanMoneyBillRegular;
