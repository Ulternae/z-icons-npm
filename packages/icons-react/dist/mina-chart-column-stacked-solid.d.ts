import React from 'react';

export interface MinaChartColumnStackedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumnStackedSolid: React.FC<MinaChartColumnStackedSolidProps>;
export default MinaChartColumnStackedSolid;
