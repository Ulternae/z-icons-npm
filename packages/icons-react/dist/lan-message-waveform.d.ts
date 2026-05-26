import React from 'react';

export interface LanMessageWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageWaveform: React.FC<LanMessageWaveformProps>;
export default LanMessageWaveform;
