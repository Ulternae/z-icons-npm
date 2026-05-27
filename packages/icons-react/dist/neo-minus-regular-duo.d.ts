import React from 'react';

export interface NeoMinusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMinusRegularDuo: React.FC<NeoMinusRegularDuoProps>;
export default NeoMinusRegularDuo;
