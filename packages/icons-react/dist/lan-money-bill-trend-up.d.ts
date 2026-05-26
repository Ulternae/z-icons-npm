import React from 'react';

export interface LanMoneyBillTrendUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillTrendUp: React.FC<LanMoneyBillTrendUpProps>;
export default LanMoneyBillTrendUp;
