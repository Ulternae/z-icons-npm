import React from 'react';

export interface LanMoneyBillSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillSimpleSolid: React.FC<LanMoneyBillSimpleSolidProps>;
export default LanMoneyBillSimpleSolid;
