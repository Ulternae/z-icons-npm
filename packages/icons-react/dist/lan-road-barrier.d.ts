import React from 'react';

export interface LanRoadBarrierProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadBarrier: React.FC<LanRoadBarrierProps>;
export default LanRoadBarrier;
