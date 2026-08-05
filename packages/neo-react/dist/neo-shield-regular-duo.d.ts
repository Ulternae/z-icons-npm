import React from 'react';

export interface NeoShieldRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoShieldRegularDuo(props: NeoShieldRegularDuoProps): React.ReactElement;
export default NeoShieldRegularDuo;
