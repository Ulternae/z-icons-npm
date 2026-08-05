import React from 'react';

export interface LanFaceSleepyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSleepyThin(props: LanFaceSleepyThinProps): React.ReactElement;
export default LanFaceSleepyThin;
