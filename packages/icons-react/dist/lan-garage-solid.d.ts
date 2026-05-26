import React from 'react';

export interface LanGarageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageSolid: React.FC<LanGarageSolidProps>;
export default LanGarageSolid;
