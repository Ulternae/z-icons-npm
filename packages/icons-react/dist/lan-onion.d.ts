import React from 'react';

export interface LanOnionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOnion: React.FC<LanOnionProps>;
export default LanOnion;
