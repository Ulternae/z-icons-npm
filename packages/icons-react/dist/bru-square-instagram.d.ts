import React from 'react';

export interface BruSquareInstagramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareInstagram: React.FC<BruSquareInstagramProps>;
export default BruSquareInstagram;
