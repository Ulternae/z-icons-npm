import React from 'react';

export interface LanMoneyBillWaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoneyBillWaveSolid(props: LanMoneyBillWaveSolidProps): React.ReactElement;
export default LanMoneyBillWaveSolid;
