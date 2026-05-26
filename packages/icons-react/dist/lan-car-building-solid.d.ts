import React from 'react';

export interface LanCarBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBuildingSolid: React.FC<LanCarBuildingSolidProps>;
export default LanCarBuildingSolid;
