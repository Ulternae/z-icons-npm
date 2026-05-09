import React from 'react';

export interface MinaChartLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartLine: React.FC<MinaChartLineProps>;
export default MinaChartLine;
