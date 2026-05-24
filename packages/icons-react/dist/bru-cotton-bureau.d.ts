import React from 'react';

export interface BruCottonBureauProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCottonBureau: React.FC<BruCottonBureauProps>;
export default BruCottonBureau;
