import React from 'react';

export interface LanHouseFloodWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseFloodWaterSolid(props: LanHouseFloodWaterSolidProps): React.ReactElement;
export default LanHouseFloodWaterSolid;
