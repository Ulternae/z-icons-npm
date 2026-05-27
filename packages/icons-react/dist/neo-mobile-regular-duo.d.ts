import React from 'react';

export interface NeoMobileRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMobileRegularDuo: React.FC<NeoMobileRegularDuoProps>;
export default NeoMobileRegularDuo;
