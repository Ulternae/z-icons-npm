import React from 'react';

export interface Lan6ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan6Thin: React.FC<Lan6ThinProps>;
export default Lan6Thin;
