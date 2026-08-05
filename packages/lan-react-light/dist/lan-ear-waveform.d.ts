import React from 'react';

export interface LanEarWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarWaveform(props: LanEarWaveformProps): React.ReactElement;
export default LanEarWaveform;
