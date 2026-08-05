import React from 'react';

export interface LanChartWaterfallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartWaterfallThin(props: LanChartWaterfallThinProps): React.ReactElement;
export default LanChartWaterfallThin;
