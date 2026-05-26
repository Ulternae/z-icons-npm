import React from 'react';

export interface LanExplosionProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExplosion: React.FC<LanExplosionProps>;
export default LanExplosion;
