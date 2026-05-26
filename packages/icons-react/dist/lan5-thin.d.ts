import React from 'react';

export interface Lan5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan5Thin: React.FC<Lan5ThinProps>;
export default Lan5Thin;
