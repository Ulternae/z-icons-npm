import React from 'react';

export interface NeoScissorsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoScissorsRegularDuo: React.FC<NeoScissorsRegularDuoProps>;
export default NeoScissorsRegularDuo;
