import React from 'react';

export interface CoreMoneyBillWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMoneyBillWave(props: CoreMoneyBillWaveProps): React.ReactElement;
export default CoreMoneyBillWave;
