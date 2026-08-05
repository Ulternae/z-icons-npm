import React from 'react';

export interface LanChartLineDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineDownRegular(props: LanChartLineDownRegularProps): React.ReactElement;
export default LanChartLineDownRegular;
