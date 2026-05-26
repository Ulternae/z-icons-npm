import React from 'react';

export interface LanTimelineArrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimelineArrowThin: React.FC<LanTimelineArrowThinProps>;
export default LanTimelineArrowThin;
