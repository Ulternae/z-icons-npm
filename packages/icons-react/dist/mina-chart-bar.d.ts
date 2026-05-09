import React from 'react';

export interface MinaChartBarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBar: React.FC<MinaChartBarProps>;
export default MinaChartBar;
