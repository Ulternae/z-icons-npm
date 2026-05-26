import React from 'react';

export interface LanSquareBitcoinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBitcoinThin: React.FC<LanSquareBitcoinThinProps>;
export default LanSquareBitcoinThin;
