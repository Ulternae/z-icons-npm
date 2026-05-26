import React from 'react';

export interface LanMoneyBillsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillsSolid: React.FC<LanMoneyBillsSolidProps>;
export default LanMoneyBillsSolid;
