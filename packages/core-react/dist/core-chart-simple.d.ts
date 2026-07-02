import React from 'react';

export interface CoreChartSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreChartSimple(props: CoreChartSimpleProps): React.ReactElement;
export default CoreChartSimple;
