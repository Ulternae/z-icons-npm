import React from 'react';

export interface LanChartLineDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineDownThin(props: LanChartLineDownThinProps): React.ReactElement;
export default LanChartLineDownThin;
