import React from 'react';

export interface Lan3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan3: React.FC<Lan3Props>;
export default Lan3;
