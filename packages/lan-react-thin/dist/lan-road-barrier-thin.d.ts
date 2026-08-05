import React from 'react';

export interface LanRoadBarrierThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadBarrierThin(props: LanRoadBarrierThinProps): React.ReactElement;
export default LanRoadBarrierThin;
