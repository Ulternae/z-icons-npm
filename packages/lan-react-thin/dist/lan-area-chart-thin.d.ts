import React from 'react';

export interface LanAreaChartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAreaChartThin(props: LanAreaChartThinProps): React.ReactElement;
export default LanAreaChartThin;
