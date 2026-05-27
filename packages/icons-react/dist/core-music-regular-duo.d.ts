import React from 'react';

export interface CoreMusicRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMusicRegularDuo: React.FC<CoreMusicRegularDuoProps>;
export default CoreMusicRegularDuo;
