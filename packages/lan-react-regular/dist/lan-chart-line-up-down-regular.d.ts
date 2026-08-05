import React from 'react';

export interface LanChartLineUpDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineUpDownRegular(props: LanChartLineUpDownRegularProps): React.ReactElement;
export default LanChartLineUpDownRegular;
