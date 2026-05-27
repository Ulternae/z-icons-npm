import React from 'react';

export interface NeoTrophyRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTrophyRegularDuo: React.FC<NeoTrophyRegularDuoProps>;
export default NeoTrophyRegularDuo;
