import React from 'react';

export interface BruSuppleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSupple: React.FC<BruSuppleProps>;
export default BruSupple;
