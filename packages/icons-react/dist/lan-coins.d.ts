import React from 'react';

export interface LanCoinsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoins: React.FC<LanCoinsProps>;
export default LanCoins;
