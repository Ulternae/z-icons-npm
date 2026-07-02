import React from 'react';

export interface CoreChartPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreChartPie(props: CoreChartPieProps): React.ReactElement;
export default CoreChartPie;
