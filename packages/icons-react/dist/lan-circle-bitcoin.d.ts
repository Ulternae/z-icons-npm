import React from 'react';

export interface LanCircleBitcoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBitcoin: React.FC<LanCircleBitcoinProps>;
export default LanCircleBitcoin;
