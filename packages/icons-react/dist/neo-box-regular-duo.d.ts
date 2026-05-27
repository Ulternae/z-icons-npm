import React from 'react';

export interface NeoBoxRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBoxRegularDuo: React.FC<NeoBoxRegularDuoProps>;
export default NeoBoxRegularDuo;
