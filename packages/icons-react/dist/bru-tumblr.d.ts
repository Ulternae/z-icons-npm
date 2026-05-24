import React from 'react';

export interface BruTumblrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTumblr: React.FC<BruTumblrProps>;
export default BruTumblr;
