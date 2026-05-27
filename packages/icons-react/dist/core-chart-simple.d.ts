import React from 'react';

export interface CoreChartSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreChartSimple: React.FC<CoreChartSimpleProps>;
export default CoreChartSimple;
