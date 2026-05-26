import React from 'react';

export interface LanTricycleAdultThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTricycleAdultThin: React.FC<LanTricycleAdultThinProps>;
export default LanTricycleAdultThin;
