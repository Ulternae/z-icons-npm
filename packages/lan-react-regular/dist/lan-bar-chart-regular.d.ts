import React from 'react';

export interface LanBarChartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarChartRegular(props: LanBarChartRegularProps): React.ReactElement;
export default LanBarChartRegular;
