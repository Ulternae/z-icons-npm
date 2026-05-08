import React from 'react';

export interface MinaChartBarStackedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarStackedSolid: React.FC<MinaChartBarStackedSolidProps>;
export default MinaChartBarStackedSolid;
