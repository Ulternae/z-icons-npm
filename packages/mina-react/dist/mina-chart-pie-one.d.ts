import React from 'react';

export interface MinaChartPieOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartPieOne(props: MinaChartPieOneProps): React.ReactElement;
export default MinaChartPieOne;
