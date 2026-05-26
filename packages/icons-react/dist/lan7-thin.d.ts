import React from 'react';

export interface Lan7ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan7Thin: React.FC<Lan7ThinProps>;
export default Lan7Thin;
