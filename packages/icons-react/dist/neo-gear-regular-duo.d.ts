import React from 'react';

export interface NeoGearRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGearRegularDuo: React.FC<NeoGearRegularDuoProps>;
export default NeoGearRegularDuo;
