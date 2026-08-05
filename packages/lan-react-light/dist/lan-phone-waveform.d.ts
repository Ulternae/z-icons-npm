import React from 'react';

export interface LanPhoneWaveformProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneWaveform(props: LanPhoneWaveformProps): React.ReactElement;
export default LanPhoneWaveform;
