import React from 'react';

export interface MinaChartNetworkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartNetworkSolid(props: MinaChartNetworkSolidProps): React.ReactElement;
export default MinaChartNetworkSolid;
