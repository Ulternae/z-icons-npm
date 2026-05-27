import React from 'react';

export interface NeoPaletteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPaletteSolid: React.FC<NeoPaletteSolidProps>;
export default NeoPaletteSolid;
