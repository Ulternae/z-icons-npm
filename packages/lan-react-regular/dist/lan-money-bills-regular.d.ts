import React from 'react';

export interface LanMoneyBillsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillsRegular(props: LanMoneyBillsRegularProps): React.ReactElement;
export default LanMoneyBillsRegular;
