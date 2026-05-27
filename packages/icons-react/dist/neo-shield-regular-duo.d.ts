import React from 'react';

export interface NeoShieldRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShieldRegularDuo: React.FC<NeoShieldRegularDuoProps>;
export default NeoShieldRegularDuo;
