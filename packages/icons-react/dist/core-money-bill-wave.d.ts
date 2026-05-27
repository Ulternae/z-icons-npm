import React from 'react';

export interface CoreMoneyBillWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoneyBillWave: React.FC<CoreMoneyBillWaveProps>;
export default CoreMoneyBillWave;
