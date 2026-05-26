import React from 'react';

export interface LanCashRegisterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCashRegisterRegular: React.FC<LanCashRegisterRegularProps>;
export default LanCashRegisterRegular;
