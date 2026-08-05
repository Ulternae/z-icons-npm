import React from 'react';

export interface LanChartLineUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineUpRegular(props: LanChartLineUpRegularProps): React.ReactElement;
export default LanChartLineUpRegular;
