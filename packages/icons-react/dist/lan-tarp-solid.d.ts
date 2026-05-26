import React from 'react';

export interface LanTarpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTarpSolid: React.FC<LanTarpSolidProps>;
export default LanTarpSolid;
