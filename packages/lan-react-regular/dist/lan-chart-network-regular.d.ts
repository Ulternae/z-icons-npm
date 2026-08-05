import React from 'react';

export interface LanChartNetworkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartNetworkRegular(props: LanChartNetworkRegularProps): React.ReactElement;
export default LanChartNetworkRegular;
