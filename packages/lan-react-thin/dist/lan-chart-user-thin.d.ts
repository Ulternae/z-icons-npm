import React from 'react';

export interface LanChartUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartUserThin(props: LanChartUserThinProps): React.ReactElement;
export default LanChartUserThin;
