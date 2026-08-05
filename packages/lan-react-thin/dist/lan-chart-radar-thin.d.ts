import React from 'react';

export interface LanChartRadarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartRadarThin(props: LanChartRadarThinProps): React.ReactElement;
export default LanChartRadarThin;
