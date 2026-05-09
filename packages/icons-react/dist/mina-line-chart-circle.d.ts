import React from 'react';

export interface MinaLineChartCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartCircle: React.FC<MinaLineChartCircleProps>;
export default MinaLineChartCircle;
