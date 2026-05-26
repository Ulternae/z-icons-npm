import React from 'react';

export interface LanLampFloorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampFloor: React.FC<LanLampFloorProps>;
export default LanLampFloor;
