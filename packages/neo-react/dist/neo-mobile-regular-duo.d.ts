import React from 'react';

export interface NeoMobileRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMobileRegularDuo(props: NeoMobileRegularDuoProps): React.ReactElement;
export default NeoMobileRegularDuo;
