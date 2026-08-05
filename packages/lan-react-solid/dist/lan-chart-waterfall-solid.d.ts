import React from 'react';

export interface LanChartWaterfallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartWaterfallSolid(props: LanChartWaterfallSolidProps): React.ReactElement;
export default LanChartWaterfallSolid;
