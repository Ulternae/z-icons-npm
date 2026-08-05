import React from 'react';

export interface LanChartRadarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartRadar(props: LanChartRadarProps): React.ReactElement;
export default LanChartRadar;
