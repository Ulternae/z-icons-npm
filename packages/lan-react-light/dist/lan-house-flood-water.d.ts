import React from 'react';

export interface LanHouseFloodWaterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFloodWater(props: LanHouseFloodWaterProps): React.ReactElement;
export default LanHouseFloodWater;
