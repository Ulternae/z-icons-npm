import React from 'react';

export interface LanLampFloorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampFloorSolid: React.FC<LanLampFloorSolidProps>;
export default LanLampFloorSolid;
