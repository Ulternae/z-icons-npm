import React from 'react';

export interface LanTimelineArrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimelineArrowSolid(props: LanTimelineArrowSolidProps): React.ReactElement;
export default LanTimelineArrowSolid;
