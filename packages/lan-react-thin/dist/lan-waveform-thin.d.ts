import React from 'react';

export interface LanWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveformThin(props: LanWaveformThinProps): React.ReactElement;
export default LanWaveformThin;
