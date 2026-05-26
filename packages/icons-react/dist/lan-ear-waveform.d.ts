import React from 'react';

export interface LanEarWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarWaveform: React.FC<LanEarWaveformProps>;
export default LanEarWaveform;
