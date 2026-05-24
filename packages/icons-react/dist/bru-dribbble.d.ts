import React from 'react';

export interface BruDribbbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDribbble: React.FC<BruDribbbleProps>;
export default BruDribbble;
