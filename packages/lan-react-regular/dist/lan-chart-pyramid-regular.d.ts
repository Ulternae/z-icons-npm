import React from 'react';

export interface LanChartPyramidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPyramidRegular(props: LanChartPyramidRegularProps): React.ReactElement;
export default LanChartPyramidRegular;
