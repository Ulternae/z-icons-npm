import React from 'react';

export interface MinaLineChartSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartSquareSolid: React.FC<MinaLineChartSquareSolidProps>;
export default MinaLineChartSquareSolid;
