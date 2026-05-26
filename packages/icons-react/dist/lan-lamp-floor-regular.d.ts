import React from 'react';

export interface LanLampFloorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampFloorRegular: React.FC<LanLampFloorRegularProps>;
export default LanLampFloorRegular;
