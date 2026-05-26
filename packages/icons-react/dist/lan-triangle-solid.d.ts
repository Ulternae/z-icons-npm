import React from 'react';

export interface LanTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleSolid: React.FC<LanTriangleSolidProps>;
export default LanTriangleSolid;
