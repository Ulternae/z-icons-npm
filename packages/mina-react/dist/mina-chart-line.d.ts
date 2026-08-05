import React from 'react';

export interface MinaChartLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartLine(props: MinaChartLineProps): React.ReactElement;
export default MinaChartLine;
