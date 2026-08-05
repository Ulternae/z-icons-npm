import React from 'react';

export interface LanCashRegisterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCashRegister(props: LanCashRegisterProps): React.ReactElement;
export default LanCashRegister;
