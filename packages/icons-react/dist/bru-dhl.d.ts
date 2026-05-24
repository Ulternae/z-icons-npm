import React from 'react';

export interface BruDhlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDhl: React.FC<BruDhlProps>;
export default BruDhl;
