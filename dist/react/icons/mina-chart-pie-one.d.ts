import React from 'react';

export interface MinaChartPieOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartPieOne: React.FC<MinaChartPieOneProps>;
export default MinaChartPieOne;
