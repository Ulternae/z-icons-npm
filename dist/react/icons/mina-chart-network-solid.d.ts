import React from 'react';

export interface MinaChartNetworkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartNetworkSolid: React.FC<MinaChartNetworkSolidProps>;
export default MinaChartNetworkSolid;
