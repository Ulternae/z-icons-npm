import React from 'react';

export interface MinaChartBarOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarOne(props: MinaChartBarOneProps): React.ReactElement;
export default MinaChartBarOne;
