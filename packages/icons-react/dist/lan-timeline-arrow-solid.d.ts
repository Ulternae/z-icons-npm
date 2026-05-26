import React from 'react';

export interface LanTimelineArrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimelineArrowSolid: React.FC<LanTimelineArrowSolidProps>;
export default LanTimelineArrowSolid;
