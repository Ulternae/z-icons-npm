import React from 'react';

export interface NeoSquareCodeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSquareCodeRegularDuo: React.FC<NeoSquareCodeRegularDuoProps>;
export default NeoSquareCodeRegularDuo;
