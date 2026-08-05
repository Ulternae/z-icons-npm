import React from 'react';

export interface LanWaveformPathThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWaveformPathThin(props: LanWaveformPathThinProps): React.ReactElement;
export default LanWaveformPathThin;
