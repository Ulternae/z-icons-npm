import React from 'react';

export interface NeoChartPieRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoChartPieRegularDuo: React.FC<NeoChartPieRegularDuoProps>;
export default NeoChartPieRegularDuo;
