import React from 'react';

export interface LanMessageWaveformSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMessageWaveformSolid: React.FC<LanMessageWaveformSolidProps>;
export default LanMessageWaveformSolid;
