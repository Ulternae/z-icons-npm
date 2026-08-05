import React from 'react';

export interface LanMoneyBillsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBills(props: LanMoneyBillsProps): React.ReactElement;
export default LanMoneyBills;
