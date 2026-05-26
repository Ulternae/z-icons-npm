import React from 'react';

export interface Lan4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan4Thin: React.FC<Lan4ThinProps>;
export default Lan4Thin;
