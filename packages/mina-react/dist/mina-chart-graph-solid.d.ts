import React from 'react';

export interface MinaChartGraphSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartGraphSolid(props: MinaChartGraphSolidProps): React.ReactElement;
export default MinaChartGraphSolid;
