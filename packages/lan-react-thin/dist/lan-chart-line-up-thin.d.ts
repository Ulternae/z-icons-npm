import React from 'react';

export interface LanChartLineUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineUpThin(props: LanChartLineUpThinProps): React.ReactElement;
export default LanChartLineUpThin;
