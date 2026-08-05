import React from 'react';

export interface MinaChartAreaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartAreaSolid(props: MinaChartAreaSolidProps): React.ReactElement;
export default MinaChartAreaSolid;
