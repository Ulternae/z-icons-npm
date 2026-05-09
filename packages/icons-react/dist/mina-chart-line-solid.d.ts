import React from 'react';

export interface MinaChartLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartLineSolid: React.FC<MinaChartLineSolidProps>;
export default MinaChartLineSolid;
