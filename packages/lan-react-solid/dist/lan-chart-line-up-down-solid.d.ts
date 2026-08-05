import React from 'react';

export interface LanChartLineUpDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineUpDownSolid(props: LanChartLineUpDownSolidProps): React.ReactElement;
export default LanChartLineUpDownSolid;
