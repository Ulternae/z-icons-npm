import React from 'react';

export interface LanChartLineUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineUpSolid(props: LanChartLineUpSolidProps): React.ReactElement;
export default LanChartLineUpSolid;
