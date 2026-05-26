import React from 'react';

export interface LanMoneyBill1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBill1Solid: React.FC<LanMoneyBill1SolidProps>;
export default LanMoneyBill1Solid;
