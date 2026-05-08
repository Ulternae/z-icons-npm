import React from 'react';

export interface MinaChartAreaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartAreaSolid: React.FC<MinaChartAreaSolidProps>;
export default MinaChartAreaSolid;
