import React from 'react';

export interface BruDisqusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDisqus: React.FC<BruDisqusProps>;
export default BruDisqus;
