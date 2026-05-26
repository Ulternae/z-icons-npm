import React from 'react';

export interface Lan1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan1Thin: React.FC<Lan1ThinProps>;
export default Lan1Thin;
