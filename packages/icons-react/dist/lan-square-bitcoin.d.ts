import React from 'react';

export interface LanSquareBitcoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBitcoin: React.FC<LanSquareBitcoinProps>;
export default LanSquareBitcoin;
