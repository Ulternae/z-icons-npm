import React from 'react';

export interface LanCubesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubesSolid: React.FC<LanCubesSolidProps>;
export default LanCubesSolid;
