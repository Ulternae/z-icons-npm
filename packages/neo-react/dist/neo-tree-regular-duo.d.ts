import React from 'react';

export interface NeoTreeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoTreeRegularDuo(props: NeoTreeRegularDuoProps): React.ReactElement;
export default NeoTreeRegularDuo;
