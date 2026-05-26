import React from 'react';

export interface Lan2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan2Solid: React.FC<Lan2SolidProps>;
export default Lan2Solid;
