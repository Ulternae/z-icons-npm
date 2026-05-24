import React from 'react';

export interface BruLetterboxdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruLetterboxd: React.FC<BruLetterboxdProps>;
export default BruLetterboxd;
