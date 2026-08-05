import React from 'react';

export interface LanRoadBarrierProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadBarrier(props: LanRoadBarrierProps): React.ReactElement;
export default LanRoadBarrier;
