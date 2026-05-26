import React from 'react';

export interface LanChartPieSimpleCircleCurrencyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPieSimpleCircleCurrency: React.FC<LanChartPieSimpleCircleCurrencyProps>;
export default LanChartPieSimpleCircleCurrency;
