import React from 'react';

export interface LanWaveformPathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveformPathSolid: React.FC<LanWaveformPathSolidProps>;
export default LanWaveformPathSolid;
