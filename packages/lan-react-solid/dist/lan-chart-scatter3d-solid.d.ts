import React from 'react';

export interface LanChartScatter3dSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatter3dSolid(props: LanChartScatter3dSolidProps): React.ReactElement;
export default LanChartScatter3dSolid;
