import React from 'react';

export interface BruVineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruVine: React.FC<BruVineProps>;
export default BruVine;
