import React from 'react';

export interface LanHouseFloodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseFloodSolid: React.FC<LanHouseFloodSolidProps>;
export default LanHouseFloodSolid;
