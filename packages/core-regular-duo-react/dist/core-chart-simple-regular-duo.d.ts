import React from 'react';

export interface CoreChartSimpleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreChartSimpleRegularDuo(props: CoreChartSimpleRegularDuoProps): React.ReactElement;
export default CoreChartSimpleRegularDuo;
