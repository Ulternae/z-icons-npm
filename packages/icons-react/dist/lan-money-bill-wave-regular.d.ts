import React from 'react';

export interface LanMoneyBillWaveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillWaveRegular: React.FC<LanMoneyBillWaveRegularProps>;
export default LanMoneyBillWaveRegular;
