import React from 'react';

export interface LanChartCandlestickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartCandlestick(props: LanChartCandlestickProps): React.ReactElement;
export default LanChartCandlestick;
