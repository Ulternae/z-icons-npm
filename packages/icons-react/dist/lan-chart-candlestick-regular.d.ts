import React from 'react';

export interface LanChartCandlestickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartCandlestickRegular: React.FC<LanChartCandlestickRegularProps>;
export default LanChartCandlestickRegular;
