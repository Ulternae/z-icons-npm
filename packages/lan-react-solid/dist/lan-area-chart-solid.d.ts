import React from 'react';

export interface LanAreaChartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAreaChartSolid(props: LanAreaChartSolidProps): React.ReactElement;
export default LanAreaChartSolid;
