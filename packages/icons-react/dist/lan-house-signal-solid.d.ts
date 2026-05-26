import React from 'react';

export interface LanHouseSignalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseSignalSolid: React.FC<LanHouseSignalSolidProps>;
export default LanHouseSignalSolid;
