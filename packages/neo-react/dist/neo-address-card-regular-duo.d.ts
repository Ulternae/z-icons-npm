import React from 'react';

export interface NeoAddressCardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAddressCardRegularDuo(props: NeoAddressCardRegularDuoProps): React.ReactElement;
export default NeoAddressCardRegularDuo;
