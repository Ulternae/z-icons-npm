import React from 'react';

export interface Lan2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan2: React.FC<Lan2Props>;
export default Lan2;
