import React from 'react';

export interface NeoStarHalfRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStarHalfRegularDuo: React.FC<NeoStarHalfRegularDuoProps>;
export default NeoStarHalfRegularDuo;
