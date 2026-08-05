import React from 'react';

export interface LanChartScatter3dProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatter3d(props: LanChartScatter3dProps): React.ReactElement;
export default LanChartScatter3d;
