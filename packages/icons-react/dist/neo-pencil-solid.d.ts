import React from 'react';

export interface NeoPencilSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPencilSolid: React.FC<NeoPencilSolidProps>;
export default NeoPencilSolid;
