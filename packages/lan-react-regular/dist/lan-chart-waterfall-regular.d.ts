import React from 'react';

export interface LanChartWaterfallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartWaterfallRegular(props: LanChartWaterfallRegularProps): React.ReactElement;
export default LanChartWaterfallRegular;
