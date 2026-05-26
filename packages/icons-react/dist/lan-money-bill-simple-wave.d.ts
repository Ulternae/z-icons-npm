import React from 'react';

export interface LanMoneyBillSimpleWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillSimpleWave: React.FC<LanMoneyBillSimpleWaveProps>;
export default LanMoneyBillSimpleWave;
