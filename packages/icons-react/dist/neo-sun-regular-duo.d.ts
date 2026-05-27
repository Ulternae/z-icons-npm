import React from 'react';

export interface NeoSunRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSunRegularDuo: React.FC<NeoSunRegularDuoProps>;
export default NeoSunRegularDuo;
