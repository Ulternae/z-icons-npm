import React from 'react';

export interface CoreChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreChartPieSolid: React.FC<CoreChartPieSolidProps>;
export default CoreChartPieSolid;
