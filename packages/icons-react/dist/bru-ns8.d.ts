import React from 'react';

export interface BruNs8Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNs8: React.FC<BruNs8Props>;
export default BruNs8;
