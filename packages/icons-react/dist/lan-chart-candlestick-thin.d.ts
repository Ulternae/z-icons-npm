import React from 'react';

export interface LanChartCandlestickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartCandlestickThin: React.FC<LanChartCandlestickThinProps>;
export default LanChartCandlestickThin;
