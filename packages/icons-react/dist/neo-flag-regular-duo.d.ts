import React from 'react';

export interface NeoFlagRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFlagRegularDuo: React.FC<NeoFlagRegularDuoProps>;
export default NeoFlagRegularDuo;
