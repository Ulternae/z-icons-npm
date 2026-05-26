import React from 'react';

export interface LanCubeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCubeSolid: React.FC<LanCubeSolidProps>;
export default LanCubeSolid;
