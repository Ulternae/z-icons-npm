import React from 'react';

export interface LanChartScatterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatterRegular(props: LanChartScatterRegularProps): React.ReactElement;
export default LanChartScatterRegular;
