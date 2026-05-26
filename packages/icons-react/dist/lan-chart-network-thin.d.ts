import React from 'react';

export interface LanChartNetworkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartNetworkThin: React.FC<LanChartNetworkThinProps>;
export default LanChartNetworkThin;
