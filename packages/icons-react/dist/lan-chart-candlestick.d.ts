import React from 'react';

export interface LanChartCandlestickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartCandlestick: React.FC<LanChartCandlestickProps>;
export default LanChartCandlestick;
