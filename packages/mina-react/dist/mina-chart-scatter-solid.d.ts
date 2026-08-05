import React from 'react';

export interface MinaChartScatterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartScatterSolid(props: MinaChartScatterSolidProps): React.ReactElement;
export default MinaChartScatterSolid;
