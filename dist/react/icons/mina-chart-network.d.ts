import React from 'react';

export interface MinaChartNetworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartNetwork: React.FC<MinaChartNetworkProps>;
export default MinaChartNetwork;
