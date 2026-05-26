import React from 'react';

export interface LanMoneyBillWaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillWaveSolid: React.FC<LanMoneyBillWaveSolidProps>;
export default LanMoneyBillWaveSolid;
