import React from 'react';

export interface MinaChartColumnIncreasingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumnIncreasingSolid: React.FC<MinaChartColumnIncreasingSolidProps>;
export default MinaChartColumnIncreasingSolid;
