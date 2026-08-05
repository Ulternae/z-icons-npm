import React from 'react';

export interface MinaChartNoAxesColumnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartNoAxesColumn(props: MinaChartNoAxesColumnProps): React.ReactElement;
export default MinaChartNoAxesColumn;
