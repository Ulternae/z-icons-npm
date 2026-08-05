import React from 'react';

export interface LanCashRegisterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCashRegisterThin(props: LanCashRegisterThinProps): React.ReactElement;
export default LanCashRegisterThin;
