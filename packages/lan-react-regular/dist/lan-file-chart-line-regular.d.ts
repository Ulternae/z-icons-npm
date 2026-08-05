import React from 'react';

export interface LanFileChartLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileChartLineRegular(props: LanFileChartLineRegularProps): React.ReactElement;
export default LanFileChartLineRegular;
