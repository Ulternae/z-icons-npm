import React from 'react';

export interface LanCashRegisterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCashRegisterThin: React.FC<LanCashRegisterThinProps>;
export default LanCashRegisterThin;
