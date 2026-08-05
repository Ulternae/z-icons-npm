import React from 'react';

export interface LanFaceSleepyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSleepy(props: LanFaceSleepyProps): React.ReactElement;
export default LanFaceSleepy;
