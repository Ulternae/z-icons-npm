import React from 'react';

export interface MinaChartBarOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarOneSolid(props: MinaChartBarOneSolidProps): React.ReactElement;
export default MinaChartBarOneSolid;
