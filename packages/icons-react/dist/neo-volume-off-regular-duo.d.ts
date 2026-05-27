import React from 'react';

export interface NeoVolumeOffRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeOffRegularDuo: React.FC<NeoVolumeOffRegularDuoProps>;
export default NeoVolumeOffRegularDuo;
