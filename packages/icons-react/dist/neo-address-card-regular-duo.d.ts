import React from 'react';

export interface NeoAddressCardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAddressCardRegularDuo: React.FC<NeoAddressCardRegularDuoProps>;
export default NeoAddressCardRegularDuo;
