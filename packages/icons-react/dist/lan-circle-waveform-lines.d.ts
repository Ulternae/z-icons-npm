import React from 'react';

export interface LanCircleWaveformLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWaveformLines: React.FC<LanCircleWaveformLinesProps>;
export default LanCircleWaveformLines;
