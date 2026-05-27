import React from 'react';

export interface NeoPrintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPrintSolid: React.FC<NeoPrintSolidProps>;
export default NeoPrintSolid;
