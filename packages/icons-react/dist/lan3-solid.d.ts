import React from 'react';

export interface Lan3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan3Solid: React.FC<Lan3SolidProps>;
export default Lan3Solid;
