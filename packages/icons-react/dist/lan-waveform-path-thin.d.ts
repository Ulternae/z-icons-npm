import React from 'react';

export interface LanWaveformPathThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveformPathThin: React.FC<LanWaveformPathThinProps>;
export default LanWaveformPathThin;
