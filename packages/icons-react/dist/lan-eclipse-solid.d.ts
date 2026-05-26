import React from 'react';

export interface LanEclipseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEclipseSolid: React.FC<LanEclipseSolidProps>;
export default LanEclipseSolid;
