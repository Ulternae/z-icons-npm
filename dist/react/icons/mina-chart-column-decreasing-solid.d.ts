import React from 'react';

export interface MinaChartColumnDecreasingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumnDecreasingSolid: React.FC<MinaChartColumnDecreasingSolidProps>;
export default MinaChartColumnDecreasingSolid;
