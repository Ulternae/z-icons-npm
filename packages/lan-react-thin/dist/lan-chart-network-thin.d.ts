import React from 'react';

export interface LanChartNetworkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartNetworkThin(props: LanChartNetworkThinProps): React.ReactElement;
export default LanChartNetworkThin;
