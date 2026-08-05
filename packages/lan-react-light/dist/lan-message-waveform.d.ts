import React from 'react';

export interface LanMessageWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageWaveform(props: LanMessageWaveformProps): React.ReactElement;
export default LanMessageWaveform;
