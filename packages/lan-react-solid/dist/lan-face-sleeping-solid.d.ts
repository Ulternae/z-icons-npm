import React from 'react';

export interface LanFaceSleepingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSleepingSolid(props: LanFaceSleepingSolidProps): React.ReactElement;
export default LanFaceSleepingSolid;
