import React from 'react';

export interface BruLinkedinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLinkedin: React.FC<BruLinkedinProps>;
export default BruLinkedin;
