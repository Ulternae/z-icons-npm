import React from 'react';

export interface MinaChartColumnStackedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumnStacked: React.FC<MinaChartColumnStackedProps>;
export default MinaChartColumnStacked;
