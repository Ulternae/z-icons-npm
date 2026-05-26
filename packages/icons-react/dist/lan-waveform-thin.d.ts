import React from 'react';

export interface LanWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveformThin: React.FC<LanWaveformThinProps>;
export default LanWaveformThin;
