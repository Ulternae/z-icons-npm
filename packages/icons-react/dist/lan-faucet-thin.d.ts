import React from 'react';

export interface LanFaucetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaucetThin: React.FC<LanFaucetThinProps>;
export default LanFaucetThin;
