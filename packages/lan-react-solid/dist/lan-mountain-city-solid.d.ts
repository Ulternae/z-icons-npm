import React from 'react';

export interface LanMountainCitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainCitySolid(props: LanMountainCitySolidProps): React.ReactElement;
export default LanMountainCitySolid;
