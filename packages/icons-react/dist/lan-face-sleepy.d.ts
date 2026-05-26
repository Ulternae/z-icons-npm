import React from 'react';

export interface LanFaceSleepyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSleepy: React.FC<LanFaceSleepyProps>;
export default LanFaceSleepy;
