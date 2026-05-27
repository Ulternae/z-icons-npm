import React from 'react';

export interface NeoPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlusSolid: React.FC<NeoPlusSolidProps>;
export default NeoPlusSolid;
