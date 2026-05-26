import React from 'react';

export interface LanMoneyBillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillThin: React.FC<LanMoneyBillThinProps>;
export default LanMoneyBillThin;
