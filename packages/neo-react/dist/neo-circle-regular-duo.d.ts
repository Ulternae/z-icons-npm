import React from 'react';

export interface NeoCircleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleRegularDuo(props: NeoCircleRegularDuoProps): React.ReactElement;
export default NeoCircleRegularDuo;
