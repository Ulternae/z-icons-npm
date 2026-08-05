import React from 'react';

export interface NeoChartPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoChartPie(props: NeoChartPieProps): React.ReactElement;
export default NeoChartPie;
