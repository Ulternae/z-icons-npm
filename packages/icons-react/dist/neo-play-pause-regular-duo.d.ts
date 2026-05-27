import React from 'react';

export interface NeoPlayPauseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlayPauseRegularDuo: React.FC<NeoPlayPauseRegularDuoProps>;
export default NeoPlayPauseRegularDuo;
