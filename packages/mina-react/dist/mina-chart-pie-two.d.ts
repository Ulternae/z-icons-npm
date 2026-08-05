import React from 'react';

export interface MinaChartPieTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartPieTwo(props: MinaChartPieTwoProps): React.ReactElement;
export default MinaChartPieTwo;
