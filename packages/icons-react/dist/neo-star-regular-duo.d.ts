import React from 'react';

export interface NeoStarRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStarRegularDuo: React.FC<NeoStarRegularDuoProps>;
export default NeoStarRegularDuo;
