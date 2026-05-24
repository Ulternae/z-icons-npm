import React from 'react';

export interface BruForumbeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruForumbee: React.FC<BruForumbeeProps>;
export default BruForumbee;
