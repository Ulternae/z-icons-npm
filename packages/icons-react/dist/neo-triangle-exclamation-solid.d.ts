import React from 'react';

export interface NeoTriangleExclamationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTriangleExclamationSolid: React.FC<NeoTriangleExclamationSolidProps>;
export default NeoTriangleExclamationSolid;
