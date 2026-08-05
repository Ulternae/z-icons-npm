import React from 'react';

export interface LanChartCandlestickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartCandlestickRegular(props: LanChartCandlestickRegularProps): React.ReactElement;
export default LanChartCandlestickRegular;
