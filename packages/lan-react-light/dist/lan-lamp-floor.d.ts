import React from 'react';

export interface LanLampFloorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampFloor(props: LanLampFloorProps): React.ReactElement;
export default LanLampFloor;
