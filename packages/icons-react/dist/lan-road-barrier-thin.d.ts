import React from 'react';

export interface LanRoadBarrierThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadBarrierThin: React.FC<LanRoadBarrierThinProps>;
export default LanRoadBarrierThin;
