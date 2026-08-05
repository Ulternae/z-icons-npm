import React from 'react';

export interface LanLampFloorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampFloorSolid(props: LanLampFloorSolidProps): React.ReactElement;
export default LanLampFloorSolid;
