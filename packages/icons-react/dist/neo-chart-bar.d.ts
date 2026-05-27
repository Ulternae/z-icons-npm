import React from 'react';

export interface NeoChartBarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoChartBar: React.FC<NeoChartBarProps>;
export default NeoChartBar;
