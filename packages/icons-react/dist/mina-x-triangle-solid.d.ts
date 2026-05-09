import React from 'react';

export interface MinaXTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXTriangleSolid: React.FC<MinaXTriangleSolidProps>;
export default MinaXTriangleSolid;
