import React from 'react';

export interface NeoChartBarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoChartBar(props: NeoChartBarProps): React.ReactElement;
export default NeoChartBar;
