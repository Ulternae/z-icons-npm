import React from 'react';

export interface BruFreebsdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFreebsd: React.FC<BruFreebsdProps>;
export default BruFreebsd;
