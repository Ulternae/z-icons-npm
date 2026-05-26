import React from 'react';

export interface LanPhoneWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhoneWaveform: React.FC<LanPhoneWaveformProps>;
export default LanPhoneWaveform;
