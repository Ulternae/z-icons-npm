import React from 'react';

export interface LanListTimelineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListTimeline(props: LanListTimelineProps): React.ReactElement;
export default LanListTimeline;
