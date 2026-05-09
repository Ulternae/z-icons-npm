import React from 'react';

export interface MinaLineChartSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartSquare: React.FC<MinaLineChartSquareProps>;
export default MinaLineChartSquare;
