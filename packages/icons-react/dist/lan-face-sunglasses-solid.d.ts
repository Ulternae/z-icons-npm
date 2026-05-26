import React from 'react';

export interface LanFaceSunglassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSunglassesSolid: React.FC<LanFaceSunglassesSolidProps>;
export default LanFaceSunglassesSolid;
