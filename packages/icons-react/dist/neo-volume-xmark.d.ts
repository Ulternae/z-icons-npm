import React from 'react';

export interface NeoVolumeXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeXmark: React.FC<NeoVolumeXmarkProps>;
export default NeoVolumeXmark;
