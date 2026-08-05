import React from 'react';

export interface LanMoneyBillRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillRegular(props: LanMoneyBillRegularProps): React.ReactElement;
export default LanMoneyBillRegular;
