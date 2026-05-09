import React from 'react';

export interface MinaChartBarStackedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarStacked: React.FC<MinaChartBarStackedProps>;
export default MinaChartBarStacked;
