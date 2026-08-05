import React from 'react';

export interface LanCircleWaveformLinesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWaveformLines(props: LanCircleWaveformLinesProps): React.ReactElement;
export default LanCircleWaveformLines;
