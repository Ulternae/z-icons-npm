import React from 'react';

export interface MinaLineChartOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartOctagon: React.FC<MinaLineChartOctagonProps>;
export default MinaLineChartOctagon;
