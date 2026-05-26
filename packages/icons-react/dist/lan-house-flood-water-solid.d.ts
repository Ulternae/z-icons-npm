import React from 'react';

export interface LanHouseFloodWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFloodWaterSolid: React.FC<LanHouseFloodWaterSolidProps>;
export default LanHouseFloodWaterSolid;
