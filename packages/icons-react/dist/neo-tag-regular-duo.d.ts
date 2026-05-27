import React from 'react';

export interface NeoTagRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTagRegularDuo: React.FC<NeoTagRegularDuoProps>;
export default NeoTagRegularDuo;
