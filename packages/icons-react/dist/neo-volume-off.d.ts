import React from 'react';

export interface NeoVolumeOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeOff: React.FC<NeoVolumeOffProps>;
export default NeoVolumeOff;
