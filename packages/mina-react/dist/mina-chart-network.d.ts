import React from 'react';

export interface MinaChartNetworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartNetwork(props: MinaChartNetworkProps): React.ReactElement;
export default MinaChartNetwork;
