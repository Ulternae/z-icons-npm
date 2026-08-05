import React from 'react';

export interface LanMoneyBillSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillSimple(props: LanMoneyBillSimpleProps): React.ReactElement;
export default LanMoneyBillSimple;
