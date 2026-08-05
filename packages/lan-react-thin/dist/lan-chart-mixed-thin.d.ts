import React from 'react';

export interface LanChartMixedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartMixedThin(props: LanChartMixedThinProps): React.ReactElement;
export default LanChartMixedThin;
