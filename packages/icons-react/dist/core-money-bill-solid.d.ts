import React from 'react';

export interface CoreMoneyBillSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoneyBillSolid: React.FC<CoreMoneyBillSolidProps>;
export default CoreMoneyBillSolid;
