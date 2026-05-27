import React from 'react';

export interface NeoVolumeXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeXmarkSolid: React.FC<NeoVolumeXmarkSolidProps>;
export default NeoVolumeXmarkSolid;
