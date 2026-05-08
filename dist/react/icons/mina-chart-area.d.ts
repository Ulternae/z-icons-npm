import React from 'react';

export interface MinaChartAreaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartArea: React.FC<MinaChartAreaProps>;
export default MinaChartArea;
