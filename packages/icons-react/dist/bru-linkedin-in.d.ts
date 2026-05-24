import React from 'react';

export interface BruLinkedinInProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLinkedinIn: React.FC<BruLinkedinInProps>;
export default BruLinkedinIn;
