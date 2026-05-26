import React from 'react';

export interface LanCircleWaveformLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWaveformLinesRegular: React.FC<LanCircleWaveformLinesRegularProps>;
export default LanCircleWaveformLinesRegular;
