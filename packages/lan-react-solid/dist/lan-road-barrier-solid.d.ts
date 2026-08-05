import React from 'react';

export interface LanRoadBarrierSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadBarrierSolid(props: LanRoadBarrierSolidProps): React.ReactElement;
export default LanRoadBarrierSolid;
