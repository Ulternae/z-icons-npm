import React from 'react';

export interface LanMountainCitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainCitySolid: React.FC<LanMountainCitySolidProps>;
export default LanMountainCitySolid;
