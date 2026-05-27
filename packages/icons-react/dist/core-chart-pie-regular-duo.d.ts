import React from 'react';

export interface CoreChartPieRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreChartPieRegularDuo: React.FC<CoreChartPieRegularDuoProps>;
export default CoreChartPieRegularDuo;
