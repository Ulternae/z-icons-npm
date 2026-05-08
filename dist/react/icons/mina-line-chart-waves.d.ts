import React from 'react';

export interface MinaLineChartWavesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartWaves: React.FC<MinaLineChartWavesProps>;
export default MinaLineChartWaves;
