import React from 'react';

export interface MinaChartSplineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartSpline: React.FC<MinaChartSplineProps>;
export default MinaChartSpline;
