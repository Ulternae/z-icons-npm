import React from 'react';

export interface LanChartTreeMapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartTreeMapRegular(props: LanChartTreeMapRegularProps): React.ReactElement;
export default LanChartTreeMapRegular;
