import React from 'react';

export interface CoreMoneyBillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMoneyBill(props: CoreMoneyBillProps): React.ReactElement;
export default CoreMoneyBill;
