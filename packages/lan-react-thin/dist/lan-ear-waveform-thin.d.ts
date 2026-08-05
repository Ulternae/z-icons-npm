import React from 'react';

export interface LanEarWaveformThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEarWaveformThin(props: LanEarWaveformThinProps): React.ReactElement;
export default LanEarWaveformThin;
