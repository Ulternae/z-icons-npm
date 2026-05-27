import React from 'react';

export interface NeoPawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPawSolid: React.FC<NeoPawSolidProps>;
export default NeoPawSolid;
