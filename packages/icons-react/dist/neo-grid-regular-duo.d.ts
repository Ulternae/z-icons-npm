import React from 'react';

export interface NeoGridRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGridRegularDuo: React.FC<NeoGridRegularDuoProps>;
export default NeoGridRegularDuo;
