import React from 'react';

export interface LanChartNetworkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartNetworkRegular: React.FC<LanChartNetworkRegularProps>;
export default LanChartNetworkRegular;
