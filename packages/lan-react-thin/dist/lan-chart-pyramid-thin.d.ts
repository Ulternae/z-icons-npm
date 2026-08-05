import React from 'react';

export interface LanChartPyramidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPyramidThin(props: LanChartPyramidThinProps): React.ReactElement;
export default LanChartPyramidThin;
