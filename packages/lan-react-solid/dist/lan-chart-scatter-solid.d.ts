import React from 'react';

export interface LanChartScatterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatterSolid(props: LanChartScatterSolidProps): React.ReactElement;
export default LanChartScatterSolid;
