import React from 'react';

export interface LanBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingSolid: React.FC<LanBuildingSolidProps>;
export default LanBuildingSolid;
