import React from 'react';

export interface MinaChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartPieSolid: React.FC<MinaChartPieSolidProps>;
export default MinaChartPieSolid;
