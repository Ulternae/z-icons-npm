import React from 'react';

export interface MinaLineChartWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartWaves(props: MinaLineChartWavesProps): React.ReactElement;
export default MinaLineChartWaves;
