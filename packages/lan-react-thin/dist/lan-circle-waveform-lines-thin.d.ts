import React from 'react';

export interface LanCircleWaveformLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWaveformLinesThin(props: LanCircleWaveformLinesThinProps): React.ReactElement;
export default LanCircleWaveformLinesThin;
