import React from 'react';

export interface LanMoneyBillWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillWheat: React.FC<LanMoneyBillWheatProps>;
export default LanMoneyBillWheat;
