import React from 'react';

export interface LanMoneyBillWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillWave(props: LanMoneyBillWaveProps): React.ReactElement;
export default LanMoneyBillWave;
