import React from 'react';

export interface MinaBrandFigmaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandFigma: React.FC<MinaBrandFigmaProps>;
export default MinaBrandFigma;
