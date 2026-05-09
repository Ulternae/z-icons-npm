import React from 'react';

export interface MinaLineChartWavesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartWavesSolid: React.FC<MinaLineChartWavesSolidProps>;
export default MinaLineChartWavesSolid;
