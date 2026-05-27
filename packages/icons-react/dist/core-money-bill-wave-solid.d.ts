import React from 'react';

export interface CoreMoneyBillWaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMoneyBillWaveSolid: React.FC<CoreMoneyBillWaveSolidProps>;
export default CoreMoneyBillWaveSolid;
