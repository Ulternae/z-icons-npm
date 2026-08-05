import React from 'react';

export interface LanChartNetworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartNetwork(props: LanChartNetworkProps): React.ReactElement;
export default LanChartNetwork;
