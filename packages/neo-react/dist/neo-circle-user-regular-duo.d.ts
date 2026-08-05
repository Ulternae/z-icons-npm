import React from 'react';

export interface NeoCircleUserRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleUserRegularDuo(props: NeoCircleUserRegularDuoProps): React.ReactElement;
export default NeoCircleUserRegularDuo;
