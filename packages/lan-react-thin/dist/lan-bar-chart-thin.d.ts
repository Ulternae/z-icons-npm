import React from 'react';

export interface LanBarChartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarChartThin(props: LanBarChartThinProps): React.ReactElement;
export default LanBarChartThin;
