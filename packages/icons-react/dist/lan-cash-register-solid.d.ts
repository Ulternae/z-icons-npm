import React from 'react';

export interface LanCashRegisterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCashRegisterSolid: React.FC<LanCashRegisterSolidProps>;
export default LanCashRegisterSolid;
