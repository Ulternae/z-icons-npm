import React from 'react';

export interface LanTimelineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimeline: React.FC<LanTimelineProps>;
export default LanTimeline;
