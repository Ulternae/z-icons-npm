import React from 'react';

export interface LanFaucetDripSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaucetDripSolid: React.FC<LanFaucetDripSolidProps>;
export default LanFaucetDripSolid;
