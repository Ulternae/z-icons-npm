import React from 'react';

export interface LanTruckLadderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckLadderSolid: React.FC<LanTruckLadderSolidProps>;
export default LanTruckLadderSolid;
