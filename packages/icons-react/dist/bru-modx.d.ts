import React from 'react';

export interface BruModxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruModx: React.FC<BruModxProps>;
export default BruModx;
