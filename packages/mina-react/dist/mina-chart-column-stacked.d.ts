import React from 'react';

export interface MinaChartColumnStackedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartColumnStacked(props: MinaChartColumnStackedProps): React.ReactElement;
export default MinaChartColumnStacked;
