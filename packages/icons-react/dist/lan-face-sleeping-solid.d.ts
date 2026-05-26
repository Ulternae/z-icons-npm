import React from 'react';

export interface LanFaceSleepingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSleepingSolid: React.FC<LanFaceSleepingSolidProps>;
export default LanFaceSleepingSolid;
