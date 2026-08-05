import React from 'react';

export interface LanChartPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPie(props: LanChartPieProps): React.ReactElement;
export default LanChartPie;
