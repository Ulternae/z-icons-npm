import React from 'react';

export interface MinaChartBarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBar(props: MinaChartBarProps): React.ReactElement;
export default MinaChartBar;
