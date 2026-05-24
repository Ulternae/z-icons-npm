import React from 'react';

export interface BruLinodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLinode: React.FC<BruLinodeProps>;
export default BruLinode;
