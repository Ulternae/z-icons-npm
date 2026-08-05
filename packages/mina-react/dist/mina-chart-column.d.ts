import React from 'react';

export interface MinaChartColumnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartColumn(props: MinaChartColumnProps): React.ReactElement;
export default MinaChartColumn;
