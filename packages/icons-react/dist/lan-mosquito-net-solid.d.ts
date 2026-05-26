import React from 'react';

export interface LanMosquitoNetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosquitoNetSolid: React.FC<LanMosquitoNetSolidProps>;
export default LanMosquitoNetSolid;
