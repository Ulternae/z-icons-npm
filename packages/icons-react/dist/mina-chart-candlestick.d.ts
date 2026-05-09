import React from 'react';

export interface MinaChartCandlestickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartCandlestick: React.FC<MinaChartCandlestickProps>;
export default MinaChartCandlestick;
