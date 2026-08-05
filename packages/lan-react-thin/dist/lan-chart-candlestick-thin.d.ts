import React from 'react';

export interface LanChartCandlestickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartCandlestickThin(props: LanChartCandlestickThinProps): React.ReactElement;
export default LanChartCandlestickThin;
