import React from 'react';

export interface NeoImageRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoImageRegularDuo: React.FC<NeoImageRegularDuoProps>;
export default NeoImageRegularDuo;
