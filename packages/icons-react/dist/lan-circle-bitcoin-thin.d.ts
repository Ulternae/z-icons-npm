import React from 'react';

export interface LanCircleBitcoinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBitcoinThin: React.FC<LanCircleBitcoinThinProps>;
export default LanCircleBitcoinThin;
