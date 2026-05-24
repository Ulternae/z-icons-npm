import React from 'react';

export interface BruDyalogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDyalog: React.FC<BruDyalogProps>;
export default BruDyalog;
