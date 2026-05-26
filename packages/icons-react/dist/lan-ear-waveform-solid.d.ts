import React from 'react';

export interface LanEarWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarWaveformSolid: React.FC<LanEarWaveformSolidProps>;
export default LanEarWaveformSolid;
