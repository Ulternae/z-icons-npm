import React from 'react';

export interface LanFaceSleepyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSleepyThin: React.FC<LanFaceSleepyThinProps>;
export default LanFaceSleepyThin;
