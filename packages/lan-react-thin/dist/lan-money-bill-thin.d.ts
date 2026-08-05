import React from 'react';

export interface LanMoneyBillThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillThin(props: LanMoneyBillThinProps): React.ReactElement;
export default LanMoneyBillThin;
