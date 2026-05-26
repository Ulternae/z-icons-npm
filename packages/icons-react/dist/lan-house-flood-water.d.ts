import React from 'react';

export interface LanHouseFloodWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFloodWater: React.FC<LanHouseFloodWaterProps>;
export default LanHouseFloodWater;
