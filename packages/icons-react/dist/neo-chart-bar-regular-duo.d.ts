import React from 'react';

export interface NeoChartBarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoChartBarRegularDuo: React.FC<NeoChartBarRegularDuoProps>;
export default NeoChartBarRegularDuo;
