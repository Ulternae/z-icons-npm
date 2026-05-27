import React from 'react';

export interface NeoVolumeOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeOffSolid: React.FC<NeoVolumeOffSolidProps>;
export default NeoVolumeOffSolid;
