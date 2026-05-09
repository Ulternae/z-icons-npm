import React from 'react';

export interface MinaChartCandlestickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartCandlestickSolid: React.FC<MinaChartCandlestickSolidProps>;
export default MinaChartCandlestickSolid;
