import React from 'react';

export interface LanMosqueSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosqueSolid: React.FC<LanMosqueSolidProps>;
export default LanMosqueSolid;
