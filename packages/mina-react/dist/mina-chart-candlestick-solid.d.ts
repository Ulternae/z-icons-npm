import React from 'react';

export interface MinaChartCandlestickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartCandlestickSolid(props: MinaChartCandlestickSolidProps): React.ReactElement;
export default MinaChartCandlestickSolid;
