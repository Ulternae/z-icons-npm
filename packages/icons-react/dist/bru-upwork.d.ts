import React from 'react';

export interface BruUpworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUpwork: React.FC<BruUpworkProps>;
export default BruUpwork;
