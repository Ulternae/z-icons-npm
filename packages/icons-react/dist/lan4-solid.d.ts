import React from 'react';

export interface Lan4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan4Solid: React.FC<Lan4SolidProps>;
export default Lan4Solid;
