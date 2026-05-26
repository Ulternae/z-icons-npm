import React from 'react';

export interface LanFaucetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaucet: React.FC<LanFaucetProps>;
export default LanFaucet;
