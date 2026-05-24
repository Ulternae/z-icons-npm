import React from 'react';

export interface BruShoelaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruShoelace: React.FC<BruShoelaceProps>;
export default BruShoelace;
