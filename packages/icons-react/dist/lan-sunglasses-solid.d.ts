import React from 'react';

export interface LanSunglassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSunglassesSolid: React.FC<LanSunglassesSolidProps>;
export default LanSunglassesSolid;
