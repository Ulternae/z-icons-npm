import React from 'react';

export interface BruSvelteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSvelte: React.FC<BruSvelteProps>;
export default BruSvelte;
