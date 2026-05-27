import React from 'react';

export interface NeoTriangleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTriangleSolid: React.FC<NeoTriangleSolidProps>;
export default NeoTriangleSolid;
