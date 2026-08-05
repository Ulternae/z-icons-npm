import React from 'react';

export interface CoreChartPieRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreChartPieRegularDuo(props: CoreChartPieRegularDuoProps): React.ReactElement;
export default CoreChartPieRegularDuo;
