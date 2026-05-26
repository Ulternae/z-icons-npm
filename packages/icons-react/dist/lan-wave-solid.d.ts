import React from 'react';

export interface LanWaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveSolid: React.FC<LanWaveSolidProps>;
export default LanWaveSolid;
