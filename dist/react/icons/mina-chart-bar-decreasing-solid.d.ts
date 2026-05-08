import React from 'react';

export interface MinaChartBarDecreasingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarDecreasingSolid: React.FC<MinaChartBarDecreasingSolidProps>;
export default MinaChartBarDecreasingSolid;
