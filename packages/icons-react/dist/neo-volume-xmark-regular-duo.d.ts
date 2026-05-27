import React from 'react';

export interface NeoVolumeXmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeXmarkRegularDuo: React.FC<NeoVolumeXmarkRegularDuoProps>;
export default NeoVolumeXmarkRegularDuo;
