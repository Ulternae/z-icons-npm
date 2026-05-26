import React from 'react';

export interface LanListTimelineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListTimeline: React.FC<LanListTimelineProps>;
export default LanListTimeline;
