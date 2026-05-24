import React from 'react';

export interface BruSassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSass: React.FC<BruSassProps>;
export default BruSass;
