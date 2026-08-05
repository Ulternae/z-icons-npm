import React from 'react';

export interface LanCircleWaveformLinesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWaveformLinesRegular(props: LanCircleWaveformLinesRegularProps): React.ReactElement;
export default LanCircleWaveformLinesRegular;
