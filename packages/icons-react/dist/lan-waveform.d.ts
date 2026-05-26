import React from 'react';

export interface LanWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveform: React.FC<LanWaveformProps>;
export default LanWaveform;
