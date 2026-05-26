import React from 'react';

export interface LanChartNetworkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartNetwork: React.FC<LanChartNetworkProps>;
export default LanChartNetwork;
