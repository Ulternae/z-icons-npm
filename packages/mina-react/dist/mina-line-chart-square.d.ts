import React from 'react';

export interface MinaLineChartSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartSquare(props: MinaLineChartSquareProps): React.ReactElement;
export default MinaLineChartSquare;
