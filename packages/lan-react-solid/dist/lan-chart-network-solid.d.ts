import React from 'react';

export interface LanChartNetworkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartNetworkSolid(props: LanChartNetworkSolidProps): React.ReactElement;
export default LanChartNetworkSolid;
