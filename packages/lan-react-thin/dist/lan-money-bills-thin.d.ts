import React from 'react';

export interface LanMoneyBillsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillsThin(props: LanMoneyBillsThinProps): React.ReactElement;
export default LanMoneyBillsThin;
