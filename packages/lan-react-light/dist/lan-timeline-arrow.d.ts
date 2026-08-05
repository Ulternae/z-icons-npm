import React from 'react';

export interface LanTimelineArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimelineArrow(props: LanTimelineArrowProps): React.ReactElement;
export default LanTimelineArrow;
