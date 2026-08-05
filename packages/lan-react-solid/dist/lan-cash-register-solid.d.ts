import React from 'react';

export interface LanCashRegisterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCashRegisterSolid(props: LanCashRegisterSolidProps): React.ReactElement;
export default LanCashRegisterSolid;
