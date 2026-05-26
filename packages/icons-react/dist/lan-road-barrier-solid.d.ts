import React from 'react';

export interface LanRoadBarrierSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadBarrierSolid: React.FC<LanRoadBarrierSolidProps>;
export default LanRoadBarrierSolid;
