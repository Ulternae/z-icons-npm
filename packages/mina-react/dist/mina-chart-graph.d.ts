import React from 'react';

export interface MinaChartGraphProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartGraph(props: MinaChartGraphProps): React.ReactElement;
export default MinaChartGraph;
