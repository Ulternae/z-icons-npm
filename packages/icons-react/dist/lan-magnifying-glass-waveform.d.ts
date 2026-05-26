import React from 'react';

export interface LanMagnifyingGlassWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnifyingGlassWaveform: React.FC<LanMagnifyingGlassWaveformProps>;
export default LanMagnifyingGlassWaveform;
