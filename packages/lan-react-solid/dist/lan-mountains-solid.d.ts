import React from 'react';

export interface LanMountainsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainsSolid(props: LanMountainsSolidProps): React.ReactElement;
export default LanMountainsSolid;
