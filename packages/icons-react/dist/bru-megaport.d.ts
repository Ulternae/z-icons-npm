import React from 'react';

export interface BruMegaportProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMegaport: React.FC<BruMegaportProps>;
export default BruMegaport;
