import React from 'react';

export interface LanMoneyBillSimpleWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillSimpleWave(props: LanMoneyBillSimpleWaveProps): React.ReactElement;
export default LanMoneyBillSimpleWave;
