import React from 'react';

export interface LanChartPieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPieRegular(props: LanChartPieRegularProps): React.ReactElement;
export default LanChartPieRegular;
