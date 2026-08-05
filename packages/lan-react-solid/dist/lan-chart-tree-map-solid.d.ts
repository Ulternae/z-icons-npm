import React from 'react';

export interface LanChartTreeMapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartTreeMapSolid(props: LanChartTreeMapSolidProps): React.ReactElement;
export default LanChartTreeMapSolid;
