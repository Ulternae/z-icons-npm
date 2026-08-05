import React from 'react';

export interface LanFaceSunglassesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSunglassesSolid(props: LanFaceSunglassesSolidProps): React.ReactElement;
export default LanFaceSunglassesSolid;
