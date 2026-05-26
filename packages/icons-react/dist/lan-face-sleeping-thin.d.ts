import React from 'react';

export interface LanFaceSleepingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSleepingThin: React.FC<LanFaceSleepingThinProps>;
export default LanFaceSleepingThin;
