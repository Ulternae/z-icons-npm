import React from 'react';

export interface NeoHourglassRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHourglassRegularDuo: React.FC<NeoHourglassRegularDuoProps>;
export default NeoHourglassRegularDuo;
