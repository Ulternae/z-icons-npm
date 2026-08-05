import React from 'react';

export interface NeoChartBarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoChartBarRegularDuo(props: NeoChartBarRegularDuoProps): React.ReactElement;
export default NeoChartBarRegularDuo;
