import React from 'react';

export interface MinaInfoTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoTriangleSolid: React.FC<MinaInfoTriangleSolidProps>;
export default MinaInfoTriangleSolid;
