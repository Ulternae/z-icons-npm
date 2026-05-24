import React from 'react';

export interface BruBtcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBtc: React.FC<BruBtcProps>;
export default BruBtc;
