import React from 'react';

export interface NeoScissorsRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoScissorsRegularDuo(props: NeoScissorsRegularDuoProps): React.ReactElement;
export default NeoScissorsRegularDuo;
