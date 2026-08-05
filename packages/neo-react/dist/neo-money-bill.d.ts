import React from 'react';

export interface NeoMoneyBillProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMoneyBill(props: NeoMoneyBillProps): React.ReactElement;
export default NeoMoneyBill;
