import React from 'react';

export interface MinaChartNoAxesColumnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartNoAxesColumn: React.FC<MinaChartNoAxesColumnProps>;
export default MinaChartNoAxesColumn;
