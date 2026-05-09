import React from 'react';

export interface MinaChartScatterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartScatterSolid: React.FC<MinaChartScatterSolidProps>;
export default MinaChartScatterSolid;
