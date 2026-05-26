import React from 'react';

export interface LanFaucetDripProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaucetDrip: React.FC<LanFaucetDripProps>;
export default LanFaucetDrip;
