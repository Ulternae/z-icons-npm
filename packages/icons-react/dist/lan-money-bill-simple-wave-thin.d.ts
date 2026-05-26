import React from 'react';

export interface LanMoneyBillSimpleWaveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyBillSimpleWaveThin: React.FC<LanMoneyBillSimpleWaveThinProps>;
export default LanMoneyBillSimpleWaveThin;
