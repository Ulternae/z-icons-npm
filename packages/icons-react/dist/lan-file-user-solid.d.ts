import React from 'react';

export interface LanFileUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileUserSolid: React.FC<LanFileUserSolidProps>;
export default LanFileUserSolid;
