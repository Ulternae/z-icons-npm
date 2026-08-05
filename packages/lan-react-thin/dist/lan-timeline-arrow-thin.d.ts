import React from 'react';

export interface LanTimelineArrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimelineArrowThin(props: LanTimelineArrowThinProps): React.ReactElement;
export default LanTimelineArrowThin;
