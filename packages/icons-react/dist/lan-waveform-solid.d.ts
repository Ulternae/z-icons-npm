import React from 'react';

export interface LanWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveformSolid: React.FC<LanWaveformSolidProps>;
export default LanWaveformSolid;
