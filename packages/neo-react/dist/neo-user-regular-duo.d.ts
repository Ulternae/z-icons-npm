import React from 'react';

export interface NeoUserRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoUserRegularDuo(props: NeoUserRegularDuoProps): React.ReactElement;
export default NeoUserRegularDuo;
