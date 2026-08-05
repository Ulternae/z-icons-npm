import React from 'react';

export interface LanFileChartPieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileChartPieRegular(props: LanFileChartPieRegularProps): React.ReactElement;
export default LanFileChartPieRegular;
