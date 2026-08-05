import React from 'react';

export interface LanSunglassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunglassesSolid(props: LanSunglassesSolidProps): React.ReactElement;
export default LanSunglassesSolid;
