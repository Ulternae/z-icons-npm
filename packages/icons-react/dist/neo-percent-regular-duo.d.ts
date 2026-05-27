import React from 'react';

export interface NeoPercentRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPercentRegularDuo: React.FC<NeoPercentRegularDuoProps>;
export default NeoPercentRegularDuo;
