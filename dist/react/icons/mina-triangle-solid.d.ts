import React from 'react';

export interface MinaTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTriangleSolid: React.FC<MinaTriangleSolidProps>;
export default MinaTriangleSolid;
