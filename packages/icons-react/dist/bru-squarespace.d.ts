import React from 'react';

export interface BruSquarespaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquarespace: React.FC<BruSquarespaceProps>;
export default BruSquarespace;
