import React from 'react';

export interface MinaChartCandlestickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartCandlestick(props: MinaChartCandlestickProps): React.ReactElement;
export default MinaChartCandlestick;
