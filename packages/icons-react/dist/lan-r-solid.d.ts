import React from 'react';

export interface LanRSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRSolid: React.FC<LanRSolidProps>;
export default LanRSolid;
