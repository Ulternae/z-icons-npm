import React from 'react';

export interface LanChartMixedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartMixed(props: LanChartMixedProps): React.ReactElement;
export default LanChartMixed;
