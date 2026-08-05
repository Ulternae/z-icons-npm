import React from 'react';

export interface LanChartLineUpDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineUpDownThin(props: LanChartLineUpDownThinProps): React.ReactElement;
export default LanChartLineUpDownThin;
