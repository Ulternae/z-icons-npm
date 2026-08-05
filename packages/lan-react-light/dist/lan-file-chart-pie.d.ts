import React from 'react';

export interface LanFileChartPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileChartPie(props: LanFileChartPieProps): React.ReactElement;
export default LanFileChartPie;
