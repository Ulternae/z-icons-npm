import React from 'react';

export interface LanCookieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCookieSolid: React.FC<LanCookieSolidProps>;
export default LanCookieSolid;
