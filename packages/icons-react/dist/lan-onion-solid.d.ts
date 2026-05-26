import React from 'react';

export interface LanOnionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOnionSolid: React.FC<LanOnionSolidProps>;
export default LanOnionSolid;
