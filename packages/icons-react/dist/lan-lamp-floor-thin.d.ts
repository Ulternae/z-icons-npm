import React from 'react';

export interface LanLampFloorThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLampFloorThin: React.FC<LanLampFloorThinProps>;
export default LanLampFloorThin;
