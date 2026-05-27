import React from 'react';

export interface CoreChartSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreChartSimpleSolid: React.FC<CoreChartSimpleSolidProps>;
export default CoreChartSimpleSolid;
