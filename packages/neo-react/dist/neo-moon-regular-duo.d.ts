import React from 'react';

export interface NeoMoonRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoMoonRegularDuo(props: NeoMoonRegularDuoProps): React.ReactElement;
export default NeoMoonRegularDuo;
