import React from 'react';

export interface LanMoneyBillWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillWave: React.FC<LanMoneyBillWaveProps>;
export default LanMoneyBillWave;
