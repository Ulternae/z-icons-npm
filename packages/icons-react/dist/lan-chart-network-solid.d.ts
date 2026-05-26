import React from 'react';

export interface LanChartNetworkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartNetworkSolid: React.FC<LanChartNetworkSolidProps>;
export default LanChartNetworkSolid;
