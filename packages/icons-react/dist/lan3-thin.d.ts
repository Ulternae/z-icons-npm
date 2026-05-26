import React from 'react';

export interface Lan3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan3Thin: React.FC<Lan3ThinProps>;
export default Lan3Thin;
