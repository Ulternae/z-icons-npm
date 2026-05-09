import React from 'react';

export interface MinaChartGraphProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartGraph: React.FC<MinaChartGraphProps>;
export default MinaChartGraph;
