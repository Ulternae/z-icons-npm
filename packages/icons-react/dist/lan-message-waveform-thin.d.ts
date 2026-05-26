import React from 'react';

export interface LanMessageWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageWaveformThin: React.FC<LanMessageWaveformThinProps>;
export default LanMessageWaveformThin;
