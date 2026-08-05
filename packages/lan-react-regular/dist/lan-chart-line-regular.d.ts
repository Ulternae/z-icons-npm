import React from 'react';

export interface LanChartLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineRegular(props: LanChartLineRegularProps): React.ReactElement;
export default LanChartLineRegular;
