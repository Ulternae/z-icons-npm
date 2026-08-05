import React from 'react';

export interface NeoMusicRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMusicRegularDuo(props: NeoMusicRegularDuoProps): React.ReactElement;
export default NeoMusicRegularDuo;
