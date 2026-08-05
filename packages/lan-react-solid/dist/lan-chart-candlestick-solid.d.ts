import React from 'react';

export interface LanChartCandlestickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartCandlestickSolid(props: LanChartCandlestickSolidProps): React.ReactElement;
export default LanChartCandlestickSolid;
