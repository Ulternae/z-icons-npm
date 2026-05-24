import React from 'react';

export interface BruSquareFigmaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareFigma: React.FC<BruSquareFigmaProps>;
export default BruSquareFigma;
