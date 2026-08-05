import React from 'react';

export interface LanChartLineDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineDownSolid(props: LanChartLineDownSolidProps): React.ReactElement;
export default LanChartLineDownSolid;
