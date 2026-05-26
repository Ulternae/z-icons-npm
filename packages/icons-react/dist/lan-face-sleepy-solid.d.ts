import React from 'react';

export interface LanFaceSleepySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSleepySolid: React.FC<LanFaceSleepySolidProps>;
export default LanFaceSleepySolid;
