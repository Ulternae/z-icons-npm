import React from 'react';

export interface LanEarWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarWaveformThin: React.FC<LanEarWaveformThinProps>;
export default LanEarWaveformThin;
