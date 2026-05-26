import React from 'react';

export interface LanPhoneWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneWaveformThin: React.FC<LanPhoneWaveformThinProps>;
export default LanPhoneWaveformThin;
