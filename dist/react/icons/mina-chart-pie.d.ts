import React from 'react';

export interface MinaChartPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartPie: React.FC<MinaChartPieProps>;
export default MinaChartPie;
