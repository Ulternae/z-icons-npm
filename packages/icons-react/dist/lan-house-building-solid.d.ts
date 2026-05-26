import React from 'react';

export interface LanHouseBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseBuildingSolid: React.FC<LanHouseBuildingSolidProps>;
export default LanHouseBuildingSolid;
