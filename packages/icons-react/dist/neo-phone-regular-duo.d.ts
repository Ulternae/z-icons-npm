import React from 'react';

export interface NeoPhoneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPhoneRegularDuo: React.FC<NeoPhoneRegularDuoProps>;
export default NeoPhoneRegularDuo;
