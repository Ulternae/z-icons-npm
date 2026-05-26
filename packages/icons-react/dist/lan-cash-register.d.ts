import React from 'react';

export interface LanCashRegisterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCashRegister: React.FC<LanCashRegisterProps>;
export default LanCashRegister;
