import React from 'react';

export interface MinaChartScatterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartScatter: React.FC<MinaChartScatterProps>;
export default MinaChartScatter;
