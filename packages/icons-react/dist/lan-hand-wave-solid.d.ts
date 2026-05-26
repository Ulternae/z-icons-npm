import React from 'react';

export interface LanHandWaveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandWaveSolid: React.FC<LanHandWaveSolidProps>;
export default LanHandWaveSolid;
