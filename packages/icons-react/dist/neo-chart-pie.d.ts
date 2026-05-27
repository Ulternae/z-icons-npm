import React from 'react';

export interface NeoChartPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoChartPie: React.FC<NeoChartPieProps>;
export default NeoChartPie;
