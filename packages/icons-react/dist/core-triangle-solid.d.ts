import React from 'react';

export interface CoreTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTriangleSolid: React.FC<CoreTriangleSolidProps>;
export default CoreTriangleSolid;
