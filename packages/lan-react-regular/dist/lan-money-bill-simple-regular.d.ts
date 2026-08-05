import React from 'react';

export interface LanMoneyBillSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillSimpleRegular(props: LanMoneyBillSimpleRegularProps): React.ReactElement;
export default LanMoneyBillSimpleRegular;
