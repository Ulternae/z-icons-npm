import React from 'react';

export interface BruCss3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCss3: React.FC<BruCss3Props>;
export default BruCss3;
