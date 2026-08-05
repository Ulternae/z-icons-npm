import React from 'react';

export interface LanMessageWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMessageWaveformThin(props: LanMessageWaveformThinProps): React.ReactElement;
export default LanMessageWaveformThin;
