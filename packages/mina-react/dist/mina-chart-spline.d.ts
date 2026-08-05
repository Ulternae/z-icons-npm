import React from 'react';

export interface MinaChartSplineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartSpline(props: MinaChartSplineProps): React.ReactElement;
export default MinaChartSpline;
