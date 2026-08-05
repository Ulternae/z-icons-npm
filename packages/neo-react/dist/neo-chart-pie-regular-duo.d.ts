import React from 'react';

export interface NeoChartPieRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoChartPieRegularDuo(props: NeoChartPieRegularDuoProps): React.ReactElement;
export default NeoChartPieRegularDuo;
