import React from 'react';

export interface LanChartRadarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartRadarRegular(props: LanChartRadarRegularProps): React.ReactElement;
export default LanChartRadarRegular;
