import React from 'react';

export interface LanTimelineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimeline(props: LanTimelineProps): React.ReactElement;
export default LanTimeline;
