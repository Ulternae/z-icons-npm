import React from 'react';

export interface MinaChartPieTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartPieTwo: React.FC<MinaChartPieTwoProps>;
export default MinaChartPieTwo;
