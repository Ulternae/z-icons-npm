import React from 'react';

export interface NeoPhoneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPhoneRegularDuo(props: NeoPhoneRegularDuoProps): React.ReactElement;
export default NeoPhoneRegularDuo;
