import React from 'react';

export interface MinaDangerTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDangerTriangleSolid: React.FC<MinaDangerTriangleSolidProps>;
export default MinaDangerTriangleSolid;
