import React from 'react';

export interface MinaLineChartCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartCircle(props: MinaLineChartCircleProps): React.ReactElement;
export default MinaLineChartCircle;
