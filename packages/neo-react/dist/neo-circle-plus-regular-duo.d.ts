import React from 'react';

export interface NeoCirclePlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCirclePlusRegularDuo(props: NeoCirclePlusRegularDuoProps): React.ReactElement;
export default NeoCirclePlusRegularDuo;
