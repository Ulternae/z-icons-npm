import React from 'react';

export interface MinaChartBarIncreasingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarIncreasingSolid: React.FC<MinaChartBarIncreasingSolidProps>;
export default MinaChartBarIncreasingSolid;
