import React from 'react';

export interface CoreChartSimpleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreChartSimpleRegularDuo: React.FC<CoreChartSimpleRegularDuoProps>;
export default CoreChartSimpleRegularDuo;
