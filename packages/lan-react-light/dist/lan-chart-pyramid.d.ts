import React from 'react';

export interface LanChartPyramidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPyramid(props: LanChartPyramidProps): React.ReactElement;
export default LanChartPyramid;
