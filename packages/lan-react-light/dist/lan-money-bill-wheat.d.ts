import React from 'react';

export interface LanMoneyBillWheatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillWheat(props: LanMoneyBillWheatProps): React.ReactElement;
export default LanMoneyBillWheat;
