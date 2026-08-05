import React from 'react';

export interface LanMoneyBillWaveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillWaveRegular(props: LanMoneyBillWaveRegularProps): React.ReactElement;
export default LanMoneyBillWaveRegular;
