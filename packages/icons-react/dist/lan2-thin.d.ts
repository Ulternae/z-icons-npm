import React from 'react';

export interface Lan2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan2Thin: React.FC<Lan2ThinProps>;
export default Lan2Thin;
