import React from 'react';

export interface LanMoneyBillSimpleWaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillSimpleWaveSolid: React.FC<LanMoneyBillSimpleWaveSolidProps>;
export default LanMoneyBillSimpleWaveSolid;
