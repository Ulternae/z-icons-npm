import React from 'react';

export interface LanCubeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCube: React.FC<LanCubeProps>;
export default LanCube;
