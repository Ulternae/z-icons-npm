import React from 'react';

export interface NeoVolumeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVolumeRegularDuo: React.FC<NeoVolumeRegularDuoProps>;
export default NeoVolumeRegularDuo;
