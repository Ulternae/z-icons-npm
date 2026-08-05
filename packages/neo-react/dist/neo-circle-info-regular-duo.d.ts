import React from 'react';

export interface NeoCircleInfoRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCircleInfoRegularDuo(props: NeoCircleInfoRegularDuoProps): React.ReactElement;
export default NeoCircleInfoRegularDuo;
