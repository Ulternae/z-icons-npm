import React from 'react';

export interface BruFigmaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruFigma: React.FC<BruFigmaProps>;
export default BruFigma;
