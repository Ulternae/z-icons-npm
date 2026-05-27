import React from 'react';

export interface NeoKeyRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoKeyRegularDuo: React.FC<NeoKeyRegularDuoProps>;
export default NeoKeyRegularDuo;
