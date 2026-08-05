import React from 'react';

export interface LanChartPyramidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPyramidSolid(props: LanChartPyramidSolidProps): React.ReactElement;
export default LanChartPyramidSolid;
