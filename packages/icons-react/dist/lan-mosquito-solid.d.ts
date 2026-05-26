import React from 'react';

export interface LanMosquitoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosquitoSolid: React.FC<LanMosquitoSolidProps>;
export default LanMosquitoSolid;
