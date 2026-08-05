import React from 'react';

export interface NeoCodeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoCodeRegularDuo(props: NeoCodeRegularDuoProps): React.ReactElement;
export default NeoCodeRegularDuo;
