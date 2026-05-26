import React from 'react';

export interface LanCarGarageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarGarageSolid: React.FC<LanCarGarageSolidProps>;
export default LanCarGarageSolid;
