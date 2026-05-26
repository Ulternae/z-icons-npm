import React from 'react';

export interface LanFileWavProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileWav: React.FC<LanFileWavProps>;
export default LanFileWav;
