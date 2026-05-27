import React from 'react';

export interface NeoListOlRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoListOlRegularDuo: React.FC<NeoListOlRegularDuoProps>;
export default NeoListOlRegularDuo;
