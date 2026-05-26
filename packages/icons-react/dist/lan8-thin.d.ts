import React from 'react';

export interface Lan8ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan8Thin: React.FC<Lan8ThinProps>;
export default Lan8Thin;
