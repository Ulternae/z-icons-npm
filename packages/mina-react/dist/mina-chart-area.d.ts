import React from 'react';

export interface MinaChartAreaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartArea(props: MinaChartAreaProps): React.ReactElement;
export default MinaChartArea;
