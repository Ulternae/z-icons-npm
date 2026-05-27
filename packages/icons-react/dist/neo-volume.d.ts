import React from 'react';

export interface NeoVolumeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolume: React.FC<NeoVolumeProps>;
export default NeoVolume;
