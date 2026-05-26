import React from 'react';

export interface LanCircleWaveformLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWaveformLinesThin: React.FC<LanCircleWaveformLinesThinProps>;
export default LanCircleWaveformLinesThin;
