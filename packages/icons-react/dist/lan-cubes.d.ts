import React from 'react';

export interface LanCubesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubes: React.FC<LanCubesProps>;
export default LanCubes;
