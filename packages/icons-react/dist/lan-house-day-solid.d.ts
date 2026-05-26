import React from 'react';

export interface LanHouseDaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseDaySolid: React.FC<LanHouseDaySolidProps>;
export default LanHouseDaySolid;
