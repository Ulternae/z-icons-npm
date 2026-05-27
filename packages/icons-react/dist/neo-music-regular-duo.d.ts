import React from 'react';

export interface NeoMusicRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMusicRegularDuo: React.FC<NeoMusicRegularDuoProps>;
export default NeoMusicRegularDuo;
