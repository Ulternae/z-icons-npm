import React from 'react';

export interface LanFileWavThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileWavThin: React.FC<LanFileWavThinProps>;
export default LanFileWavThin;
