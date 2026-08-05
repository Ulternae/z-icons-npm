import React from 'react';

export interface LanMoneyBillSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillSimpleThin(props: LanMoneyBillSimpleThinProps): React.ReactElement;
export default LanMoneyBillSimpleThin;
