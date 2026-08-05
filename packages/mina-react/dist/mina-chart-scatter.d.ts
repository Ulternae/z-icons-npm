import React from 'react';

export interface MinaChartScatterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartScatter(props: MinaChartScatterProps): React.ReactElement;
export default MinaChartScatter;
