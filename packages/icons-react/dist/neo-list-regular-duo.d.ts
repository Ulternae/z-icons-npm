import React from 'react';

export interface NeoListRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoListRegularDuo: React.FC<NeoListRegularDuoProps>;
export default NeoListRegularDuo;
