import React from 'react';

export interface NeoBoxRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoBoxRegularDuo(props: NeoBoxRegularDuoProps): React.ReactElement;
export default NeoBoxRegularDuo;
