import React from 'react';

export interface MinaChartGraphSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartGraphSolid: React.FC<MinaChartGraphSolidProps>;
export default MinaChartGraphSolid;
