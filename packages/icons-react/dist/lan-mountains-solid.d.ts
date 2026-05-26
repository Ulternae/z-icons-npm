import React from 'react';

export interface LanMountainsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainsSolid: React.FC<LanMountainsSolidProps>;
export default LanMountainsSolid;
