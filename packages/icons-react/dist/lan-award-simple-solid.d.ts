import React from 'react';

export interface LanAwardSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAwardSimpleSolid: React.FC<LanAwardSimpleSolidProps>;
export default LanAwardSimpleSolid;
