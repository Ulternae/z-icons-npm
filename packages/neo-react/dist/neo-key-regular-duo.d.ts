import React from 'react';

export interface NeoKeyRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoKeyRegularDuo(props: NeoKeyRegularDuoProps): React.ReactElement;
export default NeoKeyRegularDuo;
