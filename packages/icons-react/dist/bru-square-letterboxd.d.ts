import React from 'react';

export interface BruSquareLetterboxdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareLetterboxd: React.FC<BruSquareLetterboxdProps>;
export default BruSquareLetterboxd;
