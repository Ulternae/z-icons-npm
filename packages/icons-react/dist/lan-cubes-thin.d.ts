import React from 'react';

export interface LanCubesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubesThin: React.FC<LanCubesThinProps>;
export default LanCubesThin;
