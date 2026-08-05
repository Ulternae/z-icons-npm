import React from 'react';

export interface LanFaceSleepySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSleepySolid(props: LanFaceSleepySolidProps): React.ReactElement;
export default LanFaceSleepySolid;
