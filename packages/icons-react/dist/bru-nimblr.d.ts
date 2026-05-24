import React from 'react';

export interface BruNimblrProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNimblr: React.FC<BruNimblrProps>;
export default BruNimblr;
