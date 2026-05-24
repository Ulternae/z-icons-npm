import React from 'react';

export interface BruDevProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDev: React.FC<BruDevProps>;
export default BruDev;
