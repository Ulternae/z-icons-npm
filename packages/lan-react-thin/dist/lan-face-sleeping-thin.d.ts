import React from 'react';

export interface LanFaceSleepingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSleepingThin(props: LanFaceSleepingThinProps): React.ReactElement;
export default LanFaceSleepingThin;
