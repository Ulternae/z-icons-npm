import React from 'react';

export interface LanFaucetDripThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaucetDripThin: React.FC<LanFaucetDripThinProps>;
export default LanFaucetDripThin;
