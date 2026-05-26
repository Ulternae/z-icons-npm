import React from 'react';

export interface LanMoneyBillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillSolid: React.FC<LanMoneyBillSolidProps>;
export default LanMoneyBillSolid;
