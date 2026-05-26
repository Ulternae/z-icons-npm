import React from 'react';

export interface LanMoneyBillSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillSimpleThin: React.FC<LanMoneyBillSimpleThinProps>;
export default LanMoneyBillSimpleThin;
