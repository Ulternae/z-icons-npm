import React from 'react';

export interface BruSquareDribbbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareDribbble: React.FC<BruSquareDribbbleProps>;
export default BruSquareDribbble;
