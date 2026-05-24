import React from 'react';

export interface BruThreemaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruThreema: React.FC<BruThreemaProps>;
export default BruThreema;
