import React from 'react';

export interface LanUserTieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTieSolid: React.FC<LanUserTieSolidProps>;
export default LanUserTieSolid;
