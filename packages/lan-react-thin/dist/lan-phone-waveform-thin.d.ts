import React from 'react';

export interface LanPhoneWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPhoneWaveformThin(props: LanPhoneWaveformThinProps): React.ReactElement;
export default LanPhoneWaveformThin;
