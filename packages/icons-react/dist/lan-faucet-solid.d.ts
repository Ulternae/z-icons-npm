import React from 'react';

export interface LanFaucetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaucetSolid: React.FC<LanFaucetSolidProps>;
export default LanFaucetSolid;
