import React from 'react';

export interface MinaChartPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartPie(props: MinaChartPieProps): React.ReactElement;
export default MinaChartPie;
