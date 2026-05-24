import React from 'react';

export interface BruSquareTumblrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareTumblr: React.FC<BruSquareTumblrProps>;
export default BruSquareTumblr;
