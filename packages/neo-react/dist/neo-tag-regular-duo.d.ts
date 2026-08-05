import React from 'react';

export interface NeoTagRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTagRegularDuo(props: NeoTagRegularDuoProps): React.ReactElement;
export default NeoTagRegularDuo;
