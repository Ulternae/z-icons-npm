import React from 'react';

export interface LanTimelineArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimelineArrow: React.FC<LanTimelineArrowProps>;
export default LanTimelineArrow;
