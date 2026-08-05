import React from 'react';

export interface LanWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveform(props: LanWaveformProps): React.ReactElement;
export default LanWaveform;
