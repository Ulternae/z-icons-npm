import React from 'react';

export interface MinaLineChartWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartWavesSolid(props: MinaLineChartWavesSolidProps): React.ReactElement;
export default MinaLineChartWavesSolid;
