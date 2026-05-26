import React from 'react';

export interface LanChartCandlestickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartCandlestickSolid: React.FC<LanChartCandlestickSolidProps>;
export default LanChartCandlestickSolid;
