import React from 'react';

export interface NeoPlayPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlayPauseSolid: React.FC<NeoPlayPauseSolidProps>;
export default NeoPlayPauseSolid;
