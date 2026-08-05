import React from 'react';

export interface LanChartRadarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartRadarSolid(props: LanChartRadarSolidProps): React.ReactElement;
export default LanChartRadarSolid;
