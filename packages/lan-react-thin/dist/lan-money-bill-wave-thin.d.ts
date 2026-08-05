import React from 'react';

export interface LanMoneyBillWaveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillWaveThin(props: LanMoneyBillWaveThinProps): React.ReactElement;
export default LanMoneyBillWaveThin;
