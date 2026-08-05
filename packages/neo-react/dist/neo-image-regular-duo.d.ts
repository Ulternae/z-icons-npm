import React from 'react';

export interface NeoImageRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoImageRegularDuo(props: NeoImageRegularDuoProps): React.ReactElement;
export default NeoImageRegularDuo;
