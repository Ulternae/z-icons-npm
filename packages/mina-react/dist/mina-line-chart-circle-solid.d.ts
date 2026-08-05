import React from 'react';

export interface MinaLineChartCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartCircleSolid(props: MinaLineChartCircleSolidProps): React.ReactElement;
export default MinaLineChartCircleSolid;
