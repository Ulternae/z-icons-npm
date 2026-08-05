import React from 'react';

export interface LanChartMixedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartMixedRegular(props: LanChartMixedRegularProps): React.ReactElement;
export default LanChartMixedRegular;
