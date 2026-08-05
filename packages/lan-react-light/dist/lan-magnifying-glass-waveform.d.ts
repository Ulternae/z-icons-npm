import React from 'react';

export interface LanMagnifyingGlassWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnifyingGlassWaveform(props: LanMagnifyingGlassWaveformProps): React.ReactElement;
export default LanMagnifyingGlassWaveform;
