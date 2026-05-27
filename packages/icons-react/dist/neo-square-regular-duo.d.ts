import React from 'react';

export interface NeoSquareRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSquareRegularDuo: React.FC<NeoSquareRegularDuoProps>;
export default NeoSquareRegularDuo;
