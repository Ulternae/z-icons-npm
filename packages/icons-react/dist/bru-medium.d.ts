import React from 'react';

export interface BruMediumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMedium: React.FC<BruMediumProps>;
export default BruMedium;
