import React from 'react';

export interface LanMoneyBillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBill(props: LanMoneyBillProps): React.ReactElement;
export default LanMoneyBill;
