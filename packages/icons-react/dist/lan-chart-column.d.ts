import React from 'react';

export interface LanChartColumnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartColumn: React.FC<LanChartColumnProps>;
export default LanChartColumn;
