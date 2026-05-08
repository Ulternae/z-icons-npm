import React from 'react';

export interface MinaPencilSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPencilSolid: React.FC<MinaPencilSolidProps>;
export default MinaPencilSolid;
