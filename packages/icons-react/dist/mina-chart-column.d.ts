import React from 'react';

export interface MinaChartColumnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumn: React.FC<MinaChartColumnProps>;
export default MinaChartColumn;
